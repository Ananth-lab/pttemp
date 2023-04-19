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
exports.UpdateTenantBranchDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tenant_branch_dto_1 = require("./create-tenant_branch.dto");
const class_validator_1 = require("class-validator");
const tenant_organisation_entity_1 = require("../../tenant_organisation/entities/tenant_organisation.entity");
const tenant_branch_entity_1 = require("../entities/tenant_branch.entity");
class UpdateTenantBranchDto extends (0, mapped_types_1.PartialType)(create_tenant_branch_dto_1.CreateTenantBranchDto) {
}
__decorate([
    (0, class_validator_1.ValidateIf)((doc) => doc.organisation_id),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], UpdateTenantBranchDto.prototype, "organisation_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantBranchDto.prototype, "gstin", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateTenantBranchDto.prototype, "isParent", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(doc => doc.parentbranch),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_branch_entity_1.TenantBranch)
], UpdateTenantBranchDto.prototype, "parentbranch", void 0);
exports.UpdateTenantBranchDto = UpdateTenantBranchDto;
//# sourceMappingURL=update-tenant_branch.dto.js.map