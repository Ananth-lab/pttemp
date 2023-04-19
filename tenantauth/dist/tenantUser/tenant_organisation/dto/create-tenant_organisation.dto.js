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
exports.CreateTenantOrganisationDto = void 0;
const class_validator_1 = require("class-validator");
const tenant_organisation_entity_1 = require("../entities/tenant_organisation.entity");
const industry_domain_entity_1 = require("../../industry_domain/entities/industry_domain.entity");
const tuser_entity_1 = require("../../tusers/tuser.entity");
class CreateTenantOrganisationDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationDto.prototype, "tradename", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationDto.prototype, "gstin", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationDto.prototype, "pan", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)(doc => doc.industry_domain),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", industry_domain_entity_1.IndustryDomain)
], CreateTenantOrganisationDto.prototype, "industry_domain", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTenantOrganisationDto.prototype, "isParent", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((doc) => doc.tParentOrganisationId),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], CreateTenantOrganisationDto.prototype, "tParentOrganisationId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tuser_entity_1.Tuser)
], CreateTenantOrganisationDto.prototype, "tUserId", void 0);
exports.CreateTenantOrganisationDto = CreateTenantOrganisationDto;
//# sourceMappingURL=create-tenant_organisation.dto.js.map