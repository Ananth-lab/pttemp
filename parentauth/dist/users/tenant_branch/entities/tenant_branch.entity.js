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
var TenantBranch_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantBranch = void 0;
const tenant_branch_address_entity_1 = require("../../tenant_branch_address/entities/tenant_branch_address.entity");
const tenant_organisation_entity_1 = require("../../tenant_organisation/entities/tenant_organisation.entity");
const typeorm_1 = require("typeorm");
let TenantBranch = TenantBranch_1 = class TenantBranch {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TenantBranch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenant_organisation_entity_1.TenantOrganisation, tenantOrganisation => tenantOrganisation.id),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], TenantBranch.prototype, "organisation_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranch.prototype, "gstin", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], TenantBranch.prototype, "isParent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TenantBranch_1, (tenantBranch) => tenantBranch.id, {
        nullable: true,
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", TenantBranch)
], TenantBranch.prototype, "parentbranchId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tenant_branch_address_entity_1.TenantBranchAddress, (tenantBranchAddress) => tenantBranchAddress.tenantBranchId, { nullable: false }),
    __metadata("design:type", tenant_branch_address_entity_1.TenantBranchAddress)
], TenantBranch.prototype, "TenantBranchAddressId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TenantBranch.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TenantBranch.prototype, "updatedAt", void 0);
TenantBranch = TenantBranch_1 = __decorate([
    (0, typeorm_1.Entity)()
], TenantBranch);
exports.TenantBranch = TenantBranch;
//# sourceMappingURL=tenant_branch.entity.js.map