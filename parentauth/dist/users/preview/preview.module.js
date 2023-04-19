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
const preview_service_1 = require("./preview.service");
const preview_controller_1 = require("./preview.controller");
const tenant_organisation_address_controller_1 = require("../tenant_organisation_address/tenant_organisation_address.controller");
const tenant_organisation_service_1 = require("../tenant_organisation/tenant_organisation.service");
let PreviewModule = class PreviewModule {
};
PreviewModule = __decorate([
    (0, common_1.Module)({
        controllers: [preview_controller_1.PreviewController, tenant_organisation_address_controller_1.TenantOrganisationAddressController],
        providers: [preview_service_1.PreviewService, tenant_organisation_service_1.TenantOrganisationService]
    })
], PreviewModule);
exports.PreviewModule = PreviewModule;
//# sourceMappingURL=preview.module.js.map