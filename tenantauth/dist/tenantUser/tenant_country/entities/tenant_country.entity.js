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
exports.TenantCountry = void 0;
const tenant_branch_address_entity_1 = require("../../tenant_branch_address/entities/tenant_branch_address.entity");
const tenant_organisation_address_entity_1 = require("../../tenant_organisation_address/entities/tenant_organisation_address.entity");
const tenant_state_entity_1 = require("../../tenant_state/entities/tenant_state.entity");
const typeorm_1 = require("typeorm");
let TenantCountry = class TenantCountry {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TenantCountry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], TenantCountry.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_state_entity_1.TenantState, tenantState => tenantState.countryId),
    __metadata("design:type", tenant_state_entity_1.TenantState)
], TenantCountry.prototype, "states", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_organisation_address_entity_1.TenantOrganisationAddress, address => address.country),
    __metadata("design:type", tenant_organisation_address_entity_1.TenantOrganisationAddress)
], TenantCountry.prototype, "tOrganisationAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_branch_address_entity_1.TenantBranchAddress, tenantBranch => tenantBranch.country),
    __metadata("design:type", tenant_branch_address_entity_1.TenantBranchAddress)
], TenantCountry.prototype, "tBranch", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TenantCountry.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TenantCountry.prototype, "updatedAt", void 0);
TenantCountry = __decorate([
    (0, typeorm_1.Entity)()
], TenantCountry);
exports.TenantCountry = TenantCountry;
//# sourceMappingURL=tenant_country.entity.js.map