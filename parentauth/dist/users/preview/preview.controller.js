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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewController = void 0;
const common_1 = require("@nestjs/common");
const industry_domain_service_1 = require("../industry_domain/industry_domain.service");
const tenant_organisation_service_1 = require("../tenant_organisation/tenant_organisation.service");
let PreviewController = class PreviewController {
    constructor(domain, organisation) {
        this.domain = domain;
        this.organisation = organisation;
    }
    async getPreviewData() {
        try {
            const tenanIndustryDomain = await this.domain.findOne("id");
            const tenantOrganisation = await this.organisation.findOne("id");
            return { tenanIndustryDomain, tenantOrganisation };
        }
        catch (error) {
            throw new Error(`Error fetching preview data: ${error.message}`);
        }
    }
    async finalSubmit() { }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreviewController.prototype, "getPreviewData", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreviewController.prototype, "finalSubmit", null);
PreviewController = __decorate([
    (0, common_1.Controller)('preview'),
    __metadata("design:paramtypes", [industry_domain_service_1.IndustryDomainService,
        tenant_organisation_service_1.TenantOrganisationService])
], PreviewController);
exports.PreviewController = PreviewController;
//# sourceMappingURL=preview.controller.js.map