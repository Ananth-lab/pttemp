"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantProfileModule = void 0;
const common_1 = require("@nestjs/common");
const tenant_profile_service_1 = require("./tenant_profile.service");
const tenant_profile_controller_1 = require("./tenant_profile.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_profile_entity_1 = require("./entities/tenant_profile.entity");
let TenantProfileModule = class TenantProfileModule {
};
TenantProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_profile_entity_1.TenantProfile])],
        controllers: [tenant_profile_controller_1.TenantProfileController],
        providers: [tenant_profile_service_1.TenantProfileService],
    })
], TenantProfileModule);
exports.TenantProfileModule = TenantProfileModule;
//# sourceMappingURL=tenant_profile.module.js.map