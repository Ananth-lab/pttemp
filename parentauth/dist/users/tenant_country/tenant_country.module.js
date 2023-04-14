"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCountryModule = void 0;
const common_1 = require("@nestjs/common");
const tenant_country_service_1 = require("./tenant_country.service");
const tenant_country_controller_1 = require("./tenant_country.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_country_entity_1 = require("./entities/tenant_country.entity");
let TenantCountryModule = class TenantCountryModule {
};
TenantCountryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_country_entity_1.TenantCountry])],
        controllers: [tenant_country_controller_1.TenantCountryController],
        providers: [tenant_country_service_1.TenantCountryService]
    })
], TenantCountryModule);
exports.TenantCountryModule = TenantCountryModule;
//# sourceMappingURL=tenant_country.module.js.map