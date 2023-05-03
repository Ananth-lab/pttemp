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
exports.CreateTenantOrganisationAddressDto = void 0;
const class_validator_1 = require("class-validator");
const tenant_country_entity_1 = require("../../tenant_country/entities/tenant_country.entity");
const tenant_organisation_entity_1 = require("../../tenant_organisation/entities/tenant_organisation.entity");
const tenant_state_entity_1 = require("../../tenant_state/entities/tenant_state.entity");
const tenant_organisation_address_entity_1 = require("../entities/tenant_organisation_address.entity");
class CreateTenantOrganisationAddressDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationAddressDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationAddressDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationAddressDto.prototype, "plot_no", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((doc) => doc.state),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_state_entity_1.TenantState)
], CreateTenantOrganisationAddressDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantOrganisationAddressDto.prototype, "post_code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((doc) => doc.country),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_country_entity_1.TenantCountry)
], CreateTenantOrganisationAddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((doc) => doc.tenantOrganisationId),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], CreateTenantOrganisationAddressDto.prototype, "tenantOrganisationId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTenantOrganisationAddressDto.prototype, "isParent", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(doc => doc.parentOaddress),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_organisation_address_entity_1.TenantOrganisationAddress)
], CreateTenantOrganisationAddressDto.prototype, "parentOaddress", void 0);
exports.CreateTenantOrganisationAddressDto = CreateTenantOrganisationAddressDto;
//# sourceMappingURL=create-tenant_organisation_address.dto.js.map