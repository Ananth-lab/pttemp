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
exports.TenantPocController = void 0;
const common_1 = require("@nestjs/common");
const tenant_poc_service_1 = require("./tenant_poc.service");
const create_tenant_poc_dto_1 = require("./dto/create-tenant_poc.dto");
const update_tenant_poc_dto_1 = require("./dto/update-tenant_poc.dto");
let TenantPocController = class TenantPocController {
    constructor(tenantPocService) {
        this.tenantPocService = tenantPocService;
    }
    async create(createTenantPocDto) {
        return await this.tenantPocService.create(createTenantPocDto);
    }
    async update(id, updateTenantPocDto) {
        const user = await this.tenantPocService.update(id, updateTenantPocDto);
        if (!user)
            throw new common_1.HttpException("no data found", 404);
        return "data updated";
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_poc_dto_1.CreateTenantPocDto]),
    __metadata("design:returntype", Promise)
], TenantPocController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tenant_poc_dto_1.UpdateTenantPocDto]),
    __metadata("design:returntype", Promise)
], TenantPocController.prototype, "update", null);
TenantPocController = __decorate([
    (0, common_1.Controller)('tenant-poc'),
    __metadata("design:paramtypes", [tenant_poc_service_1.TenantPocService])
], TenantPocController);
exports.TenantPocController = TenantPocController;
//# sourceMappingURL=tenant_poc.controller.js.map