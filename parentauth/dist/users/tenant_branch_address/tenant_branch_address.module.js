"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantBranchAddressModule = void 0;
const common_1 = require("@nestjs/common");
const tenant_branch_address_service_1 = require("./tenant_branch_address.service");
const tenant_branch_address_controller_1 = require("./tenant_branch_address.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_branch_address_entity_1 = require("./entities/tenant_branch_address.entity");
let TenantBranchAddressModule = class TenantBranchAddressModule {
};
TenantBranchAddressModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_branch_address_entity_1.TenantBranchAddress])],
        controllers: [tenant_branch_address_controller_1.TenantBranchAddressController],
        providers: [tenant_branch_address_service_1.TenantBranchAddressService],
    })
], TenantBranchAddressModule);
exports.TenantBranchAddressModule = TenantBranchAddressModule;
//# sourceMappingURL=tenant_branch_address.module.js.map