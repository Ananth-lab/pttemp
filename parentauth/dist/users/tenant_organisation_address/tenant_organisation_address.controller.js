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
exports.TenantOrganisationAddressController = void 0;
const common_1 = require("@nestjs/common");
const tenant_organisation_address_service_1 = require("./tenant_organisation_address.service");
const create_tenant_organisation_address_dto_1 = require("./dto/create-tenant_organisation_address.dto");
const update_tenant_organisation_address_dto_1 = require("./dto/update-tenant_organisation_address.dto");
let TenantOrganisationAddressController = class TenantOrganisationAddressController {
    constructor(tenantOrganisationAddressService) {
        this.tenantOrganisationAddressService = tenantOrganisationAddressService;
    }
    async create(createTenantOrganisationAddressDto) {
        return await this.tenantOrganisationAddressService.create(createTenantOrganisationAddressDto);
    }
    update(id, updateTenantOrganisationAddressDto) {
        return this.tenantOrganisationAddressService.update(id, updateTenantOrganisationAddressDto);
    }
    remove(id) {
        return this.tenantOrganisationAddressService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_organisation_address_dto_1.CreateTenantOrganisationAddressDto]),
    __metadata("design:returntype", Promise)
], TenantOrganisationAddressController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tenant_organisation_address_dto_1.UpdateTenantOrganisationAddressDto]),
    __metadata("design:returntype", void 0)
], TenantOrganisationAddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TenantOrganisationAddressController.prototype, "remove", null);
TenantOrganisationAddressController = __decorate([
    (0, common_1.Controller)('tenant-organisation-address'),
    __metadata("design:paramtypes", [tenant_organisation_address_service_1.TenantOrganisationAddressService])
], TenantOrganisationAddressController);
exports.TenantOrganisationAddressController = TenantOrganisationAddressController;
//# sourceMappingURL=tenant_organisation_address.controller.js.map