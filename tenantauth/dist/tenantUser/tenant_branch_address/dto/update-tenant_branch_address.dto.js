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
exports.UpdateTenantBranchAddressDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tenant_branch_address_dto_1 = require("./create-tenant_branch_address.dto");
const class_validator_1 = require("class-validator");
const tenant_state_entity_1 = require("../../tenant_state/entities/tenant_state.entity");
const tenant_country_entity_1 = require("../../tenant_country/entities/tenant_country.entity");
const tenant_branch_entity_1 = require("../../tenant_branch/entities/tenant_branch.entity");
const tenant_branch_address_entity_1 = require("../entities/tenant_branch_address.entity");
class UpdateTenantBranchAddressDto extends (0, mapped_types_1.PartialType)(create_tenant_branch_address_dto_1.CreateTenantBranchAddressDto) {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchAddressDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchAddressDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchAddressDto.prototype, "plot_no", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_state_entity_1.TenantState)
], UpdateTenantBranchAddressDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchAddressDto.prototype, "post_code", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_country_entity_1.TenantCountry)
], UpdateTenantBranchAddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_branch_entity_1.TenantBranch)
], UpdateTenantBranchAddressDto.prototype, "branch_id", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateTenantBranchAddressDto.prototype, "isParent", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_branch_address_entity_1.TenantBranchAddress)
], UpdateTenantBranchAddressDto.prototype, "tenantBranhAddress", void 0);
exports.UpdateTenantBranchAddressDto = UpdateTenantBranchAddressDto;
//# sourceMappingURL=update-tenant_branch_address.dto.js.map