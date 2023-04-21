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
exports.TusersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tuser_entity_1 = require("./tuser.entity");
const amqp = require("amqplib");
let TusersService = class TusersService {
    constructor(repo) {
        this.repo = repo;
        this.consumeMessages();
    }
    async consumeMessages() {
        try {
            console.log("Connecting to RabbitMQ...");
            const connection = await amqp.connect(process.env.rabbitMqUrl);
            console.log("Connection to RabbitMQ established.");
            const channel = await connection.createChannel();
            const exchange = "tUser_exchange";
            await channel.assertExchange(exchange, "direct", { durable: true });
            const { queue } = await channel.assertQueue("", { exclusive: true });
            console.log("Waiting for messages in queue in: tuser", queue);
            await channel.bindQueue(queue, exchange, "tenantUserDetails");
            await channel.bindQueue(queue, exchange, "updatetenantUserDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received in:", msg.content.toString());
                    const user = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantUserDetails") {
                        await this.create(user.tenantUserDetails);
                    }
                    else if (msg.fields.routingKey === "updatetenantUserDetails") {
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
    async create(body) {
        try {
            const user = await this.repo.save(body);
            return user;
        }
        catch (error) {
            console.error('Failed to publish message to RabbitMQ:', error);
            throw error;
        }
    }
    find(email) {
        return this.repo.find({ where: { email } });
    }
    findAllTusers() {
        return this.repo.find();
    }
    async update(id, UpdateTuserDto) {
        const user = await this.repo.findOne({ where: { id: id } });
        if (!user)
            return user;
        if (UpdateTuserDto.email) {
            user.email = UpdateTuserDto.email;
        }
        if (UpdateTuserDto.name) {
            user.name = UpdateTuserDto.name;
        }
        if (UpdateTuserDto.mobile) {
            user.mobile = UpdateTuserDto.mobile;
        }
        return await this.repo.save(user);
    }
    async findOne(id) {
        const tuser = await this.repo.findOne({ where: { id } });
        if (!tuser) {
            throw new common_1.NotFoundException('not found');
        }
        return tuser;
    }
};
TusersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tuser_entity_1.Tuser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TusersService);
exports.TusersService = TusersService;
//# sourceMappingURL=tusers.service.js.map