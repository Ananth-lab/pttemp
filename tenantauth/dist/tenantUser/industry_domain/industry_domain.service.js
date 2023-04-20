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
exports.IndustryDomainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const industry_domain_entity_1 = require("./entities/industry_domain.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
const rabbitMq_sender_1 = require("../rabbitM/rabbitMq.sender");
require("dotenv").config();
let IndustryDomainService = class IndustryDomainService {
    constructor(domainRepo) {
        this.domainRepo = domainRepo;
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
            console.log("Waiting for messages in queue: Domain", queue);
            await channel.bindQueue(queue, exchange, "tenantIndustyDetails");
            await channel.bindQueue(queue, exchange, "updatetenantIndustyDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:", msg.content.toString());
                    const domain = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantIndustyDetails") {
                        await this.create(domain.tenantIndustyDetails);
                    }
                    else if (msg.fields.routingKey === "updatetenantIndustyDetails") {
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
    async create(createIndustryDomainDto) {
        try {
            return await this.domainRepo.save(createIndustryDomainDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            return await this.domainRepo.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateIndustryDomainDto) {
        try {
            const domain = await this.domainRepo.findOne({ where: { id } });
            if (!domain)
                return domain;
            if (updateIndustryDomainDto.name)
                domain.name = updateIndustryDomainDto.name;
            const industryDomain = this.domainRepo.save(domain);
            const rabbitConnection = await (0, rabbitMq_sender_1.connectRabbitMQ)();
            if (!rabbitConnection) {
                throw new Error('Failed to connect to RabbitMQ');
            }
            const { channel, exchange } = rabbitConnection;
            await channel.publish(exchange, 'updateIndustryDomainByT', Buffer.from(JSON.stringify(industryDomain)));
            console.log('Message sent: from industryDomain', industryDomain);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            return await this.domainRepo.delete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
IndustryDomainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(industry_domain_entity_1.IndustryDomain)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IndustryDomainService);
exports.IndustryDomainService = IndustryDomainService;
//# sourceMappingURL=industry_domain.service.js.map