"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantPocModule = void 0;
const common_1 = require("@nestjs/common");
const tenant_poc_service_1 = require("./tenant_poc.service");
const tenant_poc_controller_1 = require("./tenant_poc.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_poc_entity_1 = require("./entities/tenant_poc.entity");
let TenantPocModule = class TenantPocModule {
};
TenantPocModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_poc_entity_1.TenantPoc])],
        controllers: [tenant_poc_controller_1.TenantPocController],
        providers: [tenant_poc_service_1.TenantPocService]
    })
], TenantPocModule);
exports.TenantPocModule = TenantPocModule;
//# sourceMappingURL=tenant_poc.module.js.map