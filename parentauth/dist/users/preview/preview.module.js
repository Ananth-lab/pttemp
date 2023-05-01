"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewModule = void 0;
const common_1 = require("@nestjs/common");
const preview_controller_1 = require("./preview.controller");
const tenant_organisation_address_controller_1 = require("../tenant_organisation_address/tenant_organisation_address.controller");
const tenant_organisation_address_service_1 = require("../tenant_organisation_address/tenant_organisation_address.service");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_organisation_address_entity_1 = require("../tenant_organisation_address/entities/tenant_organisation_address.entity");
const tenant_poc_entity_1 = require("../tenant_poc/entities/tenant_poc.entity");
const tenant_poc_controller_1 = require("../tenant_poc/tenant_poc.controller");
const tenant_poc_service_1 = require("../tenant_poc/tenant_poc.service");
const subscription_entity_1 = require("../../subscription/entities/subscription.entity");
const subscription_controller_1 = require("../../subscription/subscription.controller");
const subscription_service_1 = require("../../subscription/subscription.service");
let PreviewModule = class PreviewModule {
};
PreviewModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tenant_organisation_address_entity_1.TenantOrganisationAddress, tenant_poc_entity_1.TenantPoc, subscription_entity_1.Subscription])],
        controllers: [preview_controller_1.PreviewController, tenant_organisation_address_controller_1.TenantOrganisationAddressController, tenant_poc_controller_1.TenantPocController, subscription_controller_1.SubscriptionController],
        providers: [tenant_organisation_address_service_1.TenantOrganisationAddressService, tenant_poc_service_1.TenantPocService, subscription_service_1.SubscriptionService]
    })
], PreviewModule);
exports.PreviewModule = PreviewModule;
//# sourceMappingURL=preview.module.js.map