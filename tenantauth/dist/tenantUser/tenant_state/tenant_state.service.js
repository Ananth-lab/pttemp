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
exports.TenantStateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_state_entity_1 = require("./entities/tenant_state.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
require("dotenv").config();
let TenantStateService = class TenantStateService {
    constructor(statRep) {
        this.statRep = statRep;
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
            console.log("Waiting for messages in queue:State", queue);
            await channel.bindQueue(queue, exchange, "createState");
            await channel.bindQueue(queue, exchange, "updatState");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:state", msg.content.toString());
                    const state = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "createState") {
                        await this.create(state);
                    }
                    else if (msg.fields.routingKey === "updateState") {
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
    async create(createTenantStateDto) {
        try {
            return await this.statRep.save(createTenantStateDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantStateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_state_entity_1.TenantState)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantStateService);
exports.TenantStateService = TenantStateService;
//# sourceMappingURL=tenant_state.service.js.map