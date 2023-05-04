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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subscription_entity_1 = require("./entities/subscription.entity");
const typeorm_2 = require("typeorm");
const amqp = require("amqplib");
const privilege_entity_1 = require("../../privileges/privilege.entity");
const create_privilege_dto_1 = require("../../privileges/dtos/create-privilege.dto");
const role_entity_1 = require("../../roles/role.entity");
let SubscriptionService = class SubscriptionService {
    constructor(subRepo, privRepo, roleRepo) {
        this.subRepo = subRepo;
        this.privRepo = privRepo;
        this.roleRepo = roleRepo;
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
            console.log("Waiting for messages in subscription-queue", queue);
            await channel.bindQueue(queue, exchange, "tenantSriptionDetails");
            await channel.bindQueue(queue, exchange, "updatetenantScriptionDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:subscription", msg.content.toString());
                    const subscription = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantScriptionDetails") {
                        await this.create(subscription.tenantScriptionDetails);
                        const dto = new create_privilege_dto_1.CreatePrivilegeDto;
                        dto.privilegeName = "super";
                        const priv = await this.privRepo.create(dto);
                    }
                    else if (msg.fields.routingKey === "updatetenantScriptionDetails") {
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
    create(createSubscriptionDto) {
        return this.subRepo.save(createSubscriptionDto);
    }
    findAll() {
        return `This action returns all subscription`;
    }
    findOne(id) {
        return `This action returns a #${id} subscription`;
    }
    update(id, updateSubscriptionDto) {
        return `This action updates a #${id} subscription`;
    }
    remove(id) {
        return `This action removes a #${id} subscription`;
    }
};
SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscription_entity_1.Subscription)),
    __param(1, (0, typeorm_1.InjectRepository)(privilege_entity_1.Privilege)),
    __param(2, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map