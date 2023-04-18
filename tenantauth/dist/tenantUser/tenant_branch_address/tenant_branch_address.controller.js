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
exports.TenantBranchAddressController = void 0;
const common_1 = require("@nestjs/common");
const tenant_branch_address_service_1 = require("./tenant_branch_address.service");
const create_tenant_branch_address_dto_1 = require("./dto/create-tenant_branch_address.dto");
const update_tenant_branch_address_dto_1 = require("./dto/update-tenant_branch_address.dto");
let TenantBranchAddressController = class TenantBranchAddressController {
    constructor(tenantBranchAddressService) {
        this.tenantBranchAddressService = tenantBranchAddressService;
    }
    async create(createTenantBranchAddressDto) {
        return await this.tenantBranchAddressService.create(createTenantBranchAddressDto);
    }
    async update(id, updateTenantBranchAddressDto) {
        return await this.tenantBranchAddressService.update(id, updateTenantBranchAddressDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_branch_address_dto_1.CreateTenantBranchAddressDto]),
    __metadata("design:returntype", Promise)
], TenantBranchAddressController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tenant_branch_address_dto_1.UpdateTenantBranchAddressDto]),
    __metadata("design:returntype", Promise)
], TenantBranchAddressController.prototype, "update", null);
TenantBranchAddressController = __decorate([
    (0, common_1.Controller)("tenant-branch-address"),
    __metadata("design:paramtypes", [tenant_branch_address_service_1.TenantBranchAddressService])
], TenantBranchAddressController);
exports.TenantBranchAddressController = TenantBranchAddressController;
//# sourceMappingURL=tenant_branch_address.controller.js.map