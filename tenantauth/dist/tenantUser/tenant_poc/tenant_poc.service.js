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
exports.TenantPocService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_poc_entity_1 = require("./entities/tenant_poc.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
let TenantPocService = class TenantPocService {
    constructor(tenantPocRepo) {
        this.tenantPocRepo = tenantPocRepo;
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
            console.log("Waiting for messages in pocQueue", queue);
            await channel.bindQueue(queue, exchange, "tenantPocDetails");
            await channel.bindQueue(queue, exchange, "updatetenantPocDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:", msg.content.toString());
                    const domain = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantPocDetails") {
                        await this.create(domain.tenantPocDetails);
                    }
                    else if (msg.fields.routingKey === "updatetenantPocDetails") {
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
    async create(createTenantPocDto) {
        return await this.tenantPocRepo.save(createTenantPocDto);
    }
    async findOne(id) {
        try {
            return await this.tenantPocRepo.findOne({ where: { id } });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOneOnOrg(id) {
        try {
            return await this.tenantPocRepo.findOne({ where: { tenantOrganisation_id: (0, typeorm_2.Equal)(id) } });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTenantPocDto) {
        try {
            const currPoc = await this.tenantPocRepo.findOne({ where: { id: id } });
            if (!currPoc)
                return currPoc;
            if (updateTenantPocDto.email) {
                currPoc.email = updateTenantPocDto.email;
            }
            if (updateTenantPocDto.name) {
                currPoc.name = updateTenantPocDto.name;
            }
            if (updateTenantPocDto.phone) {
                currPoc.phone = updateTenantPocDto.phone;
            }
            if (updateTenantPocDto.mobile) {
                currPoc.mobile = updateTenantPocDto.mobile;
            }
            await this.tenantPocRepo.save(currPoc);
            return "data updated";
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantPocService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_poc_entity_1.TenantPoc)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantPocService);
exports.TenantPocService = TenantPocService;
//# sourceMappingURL=tenant_poc.service.js.map