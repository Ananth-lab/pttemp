"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantOrganisationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_organisation_entity_1 = require("./entities/tenant_organisation.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
const rabbitMq_sender_1 = require("../rabbitM/rabbitMq.sender");
require("dotenv").config();
let TenantOrganisationService = class TenantOrganisationService {
    constructor(OrgRepo) {
        this.OrgRepo = OrgRepo;
        this.consumeMessages();
    }
    async consumeMessages() {
        try {
            console.log("Connecting to RabbitMQ...");
            const connection = await amqp.connect(process.env.rabbitMqUrl);
            console.log("Connection to RabbitMQ established.");
            const channel = await connection.createChannel();
            const exchange = "user_exchange";
            await channel.assertExchange(exchange, "direct", { durable: true });
            const { queue } = await channel.assertQueue("", { exclusive: true });
            console.log("Waiting for messages in organisationQueue", queue);
            await channel.bindQueue(queue, exchange, "tenantOrganisationDetails");
            await channel.bindQueue(queue, exchange, "updatetenantOrganisationDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:", msg.content.toString());
                    const organisation = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantOrganisationDetails") {
                        await this.create(organisation.tenantOrganisationDetails);
                    }
                    else if (msg.fields.routingKey === "updatetenantOrganisationDetails") {
                    }
                    channel.ack(msg);
                }
            }, { noAck: false });
        }
        catch (err) {
            console.error("Failed to connect to RabbitMQ");
            console.error(err);
        }
    }
    async create(createTenantOrganisationDto) {
        try {
            if (createTenantOrganisationDto.isParent == true &&
                createTenantOrganisationDto.tParentOrganisationId) {
                const id = createTenantOrganisationDto.tParentOrganisationId.toString();
                const pOrg = await this.OrgRepo.find({ where: { id } });
                if (!pOrg.length)
                    throw new common_1.HttpException("no data found with given parentId", 404);
            }
            if ((createTenantOrganisationDto.isParent == true &&
                !createTenantOrganisationDto.tParentOrganisationId) ||
                (!createTenantOrganisationDto.isParent &&
                    createTenantOrganisationDto.tParentOrganisationId)) {
                throw new common_1.HttpException("no data found with give parentId or isParent is false", 404);
            }
            return await this.OrgRepo.save(createTenantOrganisationDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            return await this.OrgRepo.find({ relations: ["tParentOrganisationId"] });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTenantOrganisationDto) {
        try {
            const organisation = await this.OrgRepo.findOne({ where: { id: id } });
            if (!organisation)
                return organisation;
            if (updateTenantOrganisationDto.name) {
                organisation.name = updateTenantOrganisationDto.name;
            }
            if (updateTenantOrganisationDto.tradename) {
                organisation.tradename = updateTenantOrganisationDto.tradename;
            }
            if (updateTenantOrganisationDto.gstin) {
                organisation.gstin = updateTenantOrganisationDto.gstin;
            }
            if (updateTenantOrganisationDto.pan) {
                organisation.pan = updateTenantOrganisationDto.pan;
            }
            if (updateTenantOrganisationDto.industry_domain) {
                organisation.industry_domain =
                    updateTenantOrganisationDto.industry_domain;
            }
            if (updateTenantOrganisationDto.isParent !== undefined) {
                organisation.isParent = updateTenantOrganisationDto.isParent;
            }
            if (updateTenantOrganisationDto.tUserId) {
                organisation.tUserId = updateTenantOrganisationDto.tUserId;
            }
            if (updateTenantOrganisationDto.isParent) {
                if (updateTenantOrganisationDto.tParentOrganisationId) {
                    const id = updateTenantOrganisationDto.tParentOrganisationId.toString();
                    const parentOrganisation = await this.OrgRepo.find({ where: { id } });
                    if (!parentOrganisation.length) {
                        throw new common_1.NotFoundException(`Parent organisation with id ${updateTenantOrganisationDto.tParentOrganisationId} not found`);
                    }
                    organisation.tParentOrganisationId =
                        updateTenantOrganisationDto.tParentOrganisationId;
                }
            }
            const organisationByT = await this.OrgRepo.save(organisation);
            const rabbitConnection = await (0, rabbitMq_sender_1.connectRabbitMQ)();
            if (!rabbitConnection) {
                throw new Error('Failed to connect to RabbitMQ');
            }
            const { channel, exchange } = rabbitConnection;
            await channel.publish(exchange, 'updateOrganisationByT', Buffer.from(JSON.stringify(organisationByT)));
            console.log('Message sent: from organisationByT', organisationByT);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            return await this.OrgRepo.delete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantOrganisationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_organisation_entity_1.TenantOrganisation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantOrganisationService);
exports.TenantOrganisationService = TenantOrganisationService;
//# sourceMappingURL=tenant_organisation.service.js.map