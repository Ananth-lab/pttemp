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
exports.TenantBranchController = void 0;
const common_1 = require("@nestjs/common");
const tenant_branch_service_1 = require("./tenant_branch.service");
const create_tenant_branch_dto_1 = require("./dto/create-tenant_branch.dto");
const update_tenant_branch_dto_1 = require("./dto/update-tenant_branch.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let TenantBranchController = class TenantBranchController {
    constructor(tenantBranchService) {
        this.tenantBranchService = tenantBranchService;
    }
    async create(createTenantBranchDto) {
        return await this.tenantBranchService.create(createTenantBranchDto);
    }
    async update(id, updateTenantBranchDto) {
        const branch = await this.tenantBranchService.update(id, updateTenantBranchDto);
        return branch;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_branch_dto_1.CreateTenantBranchDto]),
    __metadata("design:returntype", Promise)
], TenantBranchController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tenant_branch_dto_1.UpdateTenantBranchDto]),
    __metadata("design:returntype", Promise)
], TenantBranchController.prototype, "update", null);
TenantBranchController = __decorate([
    (0, common_1.Controller)("tenant-branch"),
    __metadata("design:paramtypes", [tenant_branch_service_1.TenantBranchService])
], TenantBranchController);
exports.TenantBranchController = TenantBranchController;
//# sourceMappingURL=tenant_branch.controller.js.map