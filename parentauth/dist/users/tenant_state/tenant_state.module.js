"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantStateModule = void 0;
const common_1 = require("@nestjs/common");
const tenant_state_service_1 = require("./tenant_state.service");
const tenant_state_controller_1 = require("./tenant_state.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_state_entity_1 = require("./entities/tenant_state.entity");
let TenantStateModule = class TenantStateModule {
};
TenantStateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_state_entity_1.TenantState])],
        controllers: [tenant_state_controller_1.TenantStateController],
        providers: [tenant_state_service_1.TenantStateService]
    })
], TenantStateModule);
exports.TenantStateModule = TenantStateModule;
//# sourceMappingURL=tenant_state.module.js.map