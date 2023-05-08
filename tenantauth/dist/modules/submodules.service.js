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
exports.SubmodulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const submodule_entity_1 = require("./submodule.entity");
const amqp = require("amqplib");
let SubmodulesService = class SubmodulesService {
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
            console.log("Waiting for messages in subModule-queue", queue);
            await channel.bindQueue(queue, exchange, "tenantSubModuleDetails");
            await channel.bindQueue(queue, exchange, "updatetenantSubModuleDetails");
            channel.consume(queue, async (msg) => {
                if (msg) {
                    console.log("Message received:subModule", msg.content.toString());
                    const module = JSON.parse(msg.content.toString());
                    if (msg.fields.routingKey === "tenantSubModuleDetails") {
                        await this.create(module.tenantSubModuleDetails);
                    }
                    else if (msg.fields.routingKey === "updatetenantSubModuleDetails") {
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
};
SubmodulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(submodule_entity_1.Submodule)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SubmodulesService);
exports.SubmodulesService = SubmodulesService;
//# sourceMappingURL=submodules.service.js.map