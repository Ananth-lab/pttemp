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
exports.TenantStateController = void 0;
const common_1 = require("@nestjs/common");
const tenant_state_service_1 = require("./tenant_state.service");
const create_tenant_state_dto_1 = require("./dto/create-tenant_state.dto");
let TenantStateController = class TenantStateController {
    constructor(tenantStateService) {
        this.tenantStateService = tenantStateService;
    }
    async create(createTenantStateDto) {
        return await this.tenantStateService.create(createTenantStateDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tenant_state_dto_1.CreateTenantStateDto]),
    __metadata("design:returntype", Promise)
], TenantStateController.prototype, "create", null);
TenantStateController = __decorate([
    (0, common_1.Controller)('tenant-state'),
    __metadata("design:paramtypes", [tenant_state_service_1.TenantStateService])
], TenantStateController);
exports.TenantStateController = TenantStateController;
//# sourceMappingURL=tenant_state.controller.js.map