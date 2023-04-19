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
exports.TenantOrganisationController = void 0;
const common_1 = require("@nestjs/common");
const tenant_organisation_service_1 = require("./tenant_organisation.service");
const create_tenant_organisation_dto_1 = require("./dto/create-tenant_organisation.dto");
const update_tenant_organisation_dto_1 = require("./dto/update-tenant_organisation.dto");
let TenantOrganisationController = class TenantOrganisationController {
    constructor(tenantOrganisationService) {
        this.tenantOrganisationService = tenantOrganisationService;
    }
    async create(createTenantOrganisationDto) {
        return await this.tenantOrganisationService.create(createTenantOrganisationDto);
    }
    findAll() {
        return this.tenantOrganisationService.findAll();
    }
    async update(id, updateTenantOrganisationDto) {
        const organisation = await this.tenantOrganisationService.update(id, updateTenantOrganisationDto);
        if (!organisation)
            throw new common_1.HttpException("no data found", 404);
        return "data updated";
    }
    async remove(id) {
        return this.tenantOrganisationService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_organisation_dto_1.CreateTenantOrganisationDto]),
    __metadata("design:returntype", Promise)
], TenantOrganisationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TenantOrganisationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tenant_organisation_dto_1.UpdateTenantOrganisationDto]),
    __metadata("design:returntype", Promise)
], TenantOrganisationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantOrganisationController.prototype, "remove", null);
TenantOrganisationController = __decorate([
    (0, common_1.Controller)("tenant-organisation"),
    __metadata("design:paramtypes", [tenant_organisation_service_1.TenantOrganisationService])
], TenantOrganisationController);
exports.TenantOrganisationController = TenantOrganisationController;
//# sourceMappingURL=tenant_organisation.controller.js.map