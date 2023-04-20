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
exports.CreateTenantBranchAddressDto = void 0;
const class_validator_1 = require("class-validator");
const tenant_branch_entity_1 = require("../../tenant_branch/entities/tenant_branch.entity");
const tenant_country_entity_1 = require("../../tenant_country/entities/tenant_country.entity");
const tenant_state_entity_1 = require("../../tenant_state/entities/tenant_state.entity");
const tenant_branch_address_entity_1 = require("../entities/tenant_branch_address.entity");
class CreateTenantBranchAddressDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantBranchAddressDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantBranchAddressDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantBranchAddressDto.prototype, "plot_no", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantBranchAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_state_entity_1.TenantState)
], CreateTenantBranchAddressDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantBranchAddressDto.prototype, "post_code", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_country_entity_1.TenantCountry)
], CreateTenantBranchAddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_branch_entity_1.TenantBranch)
], CreateTenantBranchAddressDto.prototype, "branch_id", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTenantBranchAddressDto.prototype, "isParent", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(doc => doc.tenantBranchAddress),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_branch_address_entity_1.TenantBranchAddress)
], CreateTenantBranchAddressDto.prototype, "tenantBranhAddress", void 0);
exports.CreateTenantBranchAddressDto = CreateTenantBranchAddressDto;
//# sourceMappingURL=create-tenant_branch_address.dto.js.map