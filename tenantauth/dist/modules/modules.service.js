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
exports.ModulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const module_entity_1 = require("./module.entity");
const amqp = require("amqplib");
let ModulesService = class ModulesService {
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
            const exchange = "user_exchange";
            await channel.assertExchange(exchange, "direct", { durable: true });
            const { queue } = await channel.assertQueue("", { exclusive: true });
            console.log("Waiting for messages in module-queue", queue);
            await channel.bindQueue(queue, exchange, "tenantModuleDetails");
            await channel.bindQueue(queue, exchange, "updatetenantModuleDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:module", msg.content.toString());
                    const module = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantModuleDetails") {
                        await this.create(module.tenantModuleDetails);
                    }
                    else if (msg.fields.routingKey === "updatetenantModuleDetails") {
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
    create(data) {
        const module = this.repo.create(data);
        return this.repo.save(module);
    }
    find() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOne({ where: { id } });
    }
    findOneIncludeSubmodule(id) {
        return this.repo.findOne({
            where: { id },
            relations: { submodules: true },
        });
    }
    async remove(id) {
        const module = await this.findOne(id);
        if (!module) {
            throw new common_1.NotFoundException('module not found');
        }
        return this.repo.remove(module);
    }
};
ModulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(module_entity_1.Tmodule)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ModulesService);
exports.ModulesService = ModulesService;
//# sourceMappingURL=modules.service.js.map