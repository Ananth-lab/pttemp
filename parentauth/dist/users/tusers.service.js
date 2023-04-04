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
const rabbit_1 = require("./rabbit");
let TusersService = class TusersService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(body) {
        const user = this.repo.create(body);
        try {
            const rabbitConnection = await (0, rabbit_1.connectRabbitMQ)();
            if (!rabbitConnection) {
                throw new Error('Failed to connect to RabbitMQ');
            }
            const { channel, exchange } = rabbitConnection;
            await channel.publish(exchange, 'createUser', Buffer.from(JSON.stringify(user)));
            console.log('Message sent:', user);
            return this.repo.save(user);
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