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
var TenantBranchAddress_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantBranchAddress = void 0;
const tenant_branch_entity_1 = require("../../tenant_branch/entities/tenant_branch.entity");
const tenant_country_entity_1 = require("../../tenant_country/entities/tenant_country.entity");
const tenant_state_entity_1 = require("../../tenant_state/entities/tenant_state.entity");
const typeorm_1 = require("typeorm");
let TenantBranchAddress = TenantBranchAddress_1 = class TenantBranchAddress {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TenantBranchAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranchAddress.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranchAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranchAddress.prototype, "plot_no", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranchAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenant_state_entity_1.TenantState, (state) => state.id),
    __metadata("design:type", tenant_state_entity_1.TenantState)
], TenantBranchAddress.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantBranchAddress.prototype, "post_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenant_country_entity_1.TenantCountry, (country) => country.id),
    __metadata("design:type", tenant_country_entity_1.TenantCountry)
], TenantBranchAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], TenantBranchAddress.prototype, "isParent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TenantBranchAddress_1, (tenantBranchAddress) => tenantBranchAddress.id, {
        nullable: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", TenantBranchAddress)
], TenantBranchAddress.prototype, "tenantBranhAddress", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tenant_branch_entity_1.TenantBranch, (tenantBranch) => tenantBranch.id, {
        nullable: false,
    }),
    __metadata("design:type", tenant_branch_entity_1.TenantBranch)
], TenantBranchAddress.prototype, "tenantBranchId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TenantBranchAddress.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TenantBranchAddress.prototype, "updatedAt", void 0);
TenantBranchAddress = TenantBranchAddress_1 = __decorate([
    (0, typeorm_1.Entity)()
], TenantBranchAddress);
exports.TenantBranchAddress = TenantBranchAddress;
//# sourceMappingURL=tenant_branch_address.entity.js.map