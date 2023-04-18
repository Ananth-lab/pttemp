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
exports.TenantProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_profile_entity_1 = require("./entities/tenant_profile.entity");
const typeorm_2 = require("typeorm");
let TenantProfileService = class TenantProfileService {
    constructor(profileRepo) {
        this.profileRepo = profileRepo;
    }
    async create(createTenantProfileDto) {
        try {
            return await this.profileRepo.save(createTenantProfileDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTenantProfileDto) {
        try {
            const profile = await this.profileRepo.findOne({ where: { id: id } });
            if (!profile)
                return profile;
            if (updateTenantProfileDto.profileImage) {
                profile.profileImage = updateTenantProfileDto.profileImage;
            }
            if (updateTenantProfileDto.billingAddress) {
                profile.billingAddress = updateTenantProfileDto.billingAddress;
            }
            if (updateTenantProfileDto.billingName) {
                profile.billingName = updateTenantProfileDto.billingName;
            }
            if (updateTenantProfileDto.gstin) {
                profile.gstin = updateTenantProfileDto.gstin;
            }
            return await this.profileRepo.save(profile);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_profile_entity_1.TenantProfile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantProfileService);
exports.TenantProfileService = TenantProfileService;
//# sourceMappingURL=tenant_profile.service.js.map