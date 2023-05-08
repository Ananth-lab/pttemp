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
exports.TenantProfileController = void 0;
const common_1 = require("@nestjs/common");
const tenant_profile_service_1 = require("./tenant_profile.service");
const create_tenant_profile_dto_1 = require("./dto/create-tenant_profile.dto");
const update_tenant_profile_dto_1 = require("./dto/update-tenant_profile.dto");
let TenantProfileController = class TenantProfileController {
    constructor(tenantProfileService) {
        this.tenantProfileService = tenantProfileService;
    }
    async create(createTenantProfileDto) {
        return await this.tenantProfileService.create(createTenantProfileDto);
    }
    async update(id, updateTenantProfileDto) {
        const profile = await this.tenantProfileService.update(id, updateTenantProfileDto);
        if (!profile)
            throw new common_1.HttpException("no data found", 404);
        return "profile updated";
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_profile_dto_1.CreateTenantProfileDto]),
    __metadata("design:returntype", Promise)
], TenantProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tenant_profile_dto_1.UpdateTenantProfileDto]),
    __metadata("design:returntype", Promise)
], TenantProfileController.prototype, "update", null);
TenantProfileController = __decorate([
    (0, common_1.Controller)("tenant-profile"),
    __metadata("design:paramtypes", [tenant_profile_service_1.TenantProfileService])
], TenantProfileController);
exports.TenantProfileController = TenantProfileController;
//# sourceMappingURL=tenant_profile.controller.js.map