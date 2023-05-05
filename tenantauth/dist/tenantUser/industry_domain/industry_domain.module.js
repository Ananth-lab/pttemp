"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryDomainModule = void 0;
const common_1 = require("@nestjs/common");
const industry_domain_service_1 = require("./industry_domain.service");
const industry_domain_controller_1 = require("./industry_domain.controller");
const typeorm_1 = require("@nestjs/typeorm");
const industry_domain_entity_1 = require("./entities/industry_domain.entity");
let IndustryDomainModule = class IndustryDomainModule {
};
IndustryDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([industry_domain_entity_1.IndustryDomain])],
        controllers: [industry_domain_controller_1.IndustryDomainController],
        providers: [industry_domain_service_1.IndustryDomainService]
    })
], IndustryDomainModule);
exports.IndustryDomainModule = IndustryDomainModule;
//# sourceMappingURL=industry_domain.module.js.map