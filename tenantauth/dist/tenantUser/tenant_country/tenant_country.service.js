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
exports.TenantCountryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_country_entity_1 = require("./entities/tenant_country.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
const rabbitMq_sender_1 = require("../rabbitM/rabbitMq.sender");
let TenantCountryService = class TenantCountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
        this.consumeMessages();
    }
    async consumeMessages() {
        try {
            console.log("Connecting to RabbitMQ...");
            const connection = await amqp.connect("amqp://localhost");
            console.log("Connection to RabbitMQ established.");
            const channel = await connection.createChannel();
            const exchange = "user_exchange";
            await channel.assertExchange(exchange, "direct", { durable: true });
            const { queue } = await channel.assertQueue("", { exclusive: true });
            console.log("Waiting for messages in queue:Country", queue);
            await channel.bindQueue(queue, exchange, "createCountry");
            await channel.bindQueue(queue, exchange, "updatCountry");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:", msg.content.toString());
                    const country = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "createCountry") {
                        await this.create(country);
                    }
                    else if (msg.fields.routingKey === "updateCountry") {
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
    async create(createTenantCountryDto) {
        try {
            return await this.countryRepository.save(createTenantCountryDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTenantCountryDto) {
        try {
            const country = await this.countryRepository.findOne({ where: { id } });
            if (!country)
                return country;
            if (updateTenantCountryDto.name)
                country.name = updateTenantCountryDto.name;
            const teantCountry = this.countryRepository.save(country);
            const rabbitConnection = await (0, rabbitMq_sender_1.connectRabbitMQ)();
            if (!rabbitConnection) {
                throw new Error('Failed to connect to RabbitMQ');
            }
            const { channel, exchange } = rabbitConnection;
            await channel.publish(exchange, 'updateCountryByT', Buffer.from(JSON.stringify(teantCountry)));
            console.log('Message sent: from teantCountry', teantCountry);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantCountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_country_entity_1.TenantCountry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantCountryService);
exports.TenantCountryService = TenantCountryService;
//# sourceMappingURL=tenant_country.service.js.map