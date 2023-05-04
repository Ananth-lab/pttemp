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
const tmodule_entity_1 = require("../tmodules/tmodule.entity");
const tsubmodule_entity_1 = require("../tmodules/tsubmodule.entity");
let SubscriptionService = class SubscriptionService {
    constructor(subRepo, moduleRepo, subModuleRepo) {
        this.subRepo = subRepo;
        this.moduleRepo = moduleRepo;
        this.subModuleRepo = subModuleRepo;
    }
    async create(createSubscriptionDto) {
        let errorMessages = [];
        if (createSubscriptionDto.module) {
            for (const moduleId of createSubscriptionDto.module) {
                const data = await this.moduleRepo.findOne({ where: { id: moduleId } });
                if (!data) {
                    errorMessages.push(`Module with ID ${moduleId} not found`);
                }
            }
        }
        if (createSubscriptionDto.subModule) {
            for (const submoduleId of createSubscriptionDto.subModule) {
                const data = await this.subModuleRepo.findOne({ where: { id: submoduleId } });
                if (!data) {
                    errorMessages.push(`Submodule with ID ${submoduleId} not found`);
                }
            }
        }
        if (errorMessages.length > 0) {
            const errorResponse = {
                message: 'Validation failed',
                errors: errorMessages,
            };
            return {
                statusCode: 400,
                body: errorResponse,
            };
        }
        const savedSubscription = await this.subRepo.save(createSubscriptionDto);
        return {
            statusCode: 201,
            body: savedSubscription,
        };
    }
    findAll() {
        return `This action returns all subscription`;
    }
    findOne(id) {
        return `This action returns a #${id} subscription`;
    }
    findOneByTuserId(id) {
        return this.subRepo.findOne({ where: { tUser: (0, typeorm_2.Equal)(id) } });
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
    __param(1, (0, typeorm_1.InjectRepository)(tmodule_entity_1.Tmodule)),
    __param(2, (0, typeorm_1.InjectRepository)(tsubmodule_entity_1.Tsubmodule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map