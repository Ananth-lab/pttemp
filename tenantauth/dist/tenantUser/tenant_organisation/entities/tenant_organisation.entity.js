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
var TenantOrganisation_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantOrganisation = void 0;
const industry_domain_entity_1 = require("../../industry_domain/entities/industry_domain.entity");
const tenant_branch_entity_1 = require("../../tenant_branch/entities/tenant_branch.entity");
const tenant_organisation_address_entity_1 = require("../../tenant_organisation_address/entities/tenant_organisation_address.entity");
const tenant_poc_entity_1 = require("../../tenant_poc/entities/tenant_poc.entity");
const tuser_entity_1 = require("../../tusers/tuser.entity");
const typeorm_1 = require("typeorm");
let TenantOrganisation = TenantOrganisation_1 = class TenantOrganisation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TenantOrganisation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisation.prototype, "tradename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisation.prototype, "gstin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisation.prototype, "pan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => industry_domain_entity_1.IndustryDomain, (industryDomain) => industryDomain.id, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", industry_domain_entity_1.IndustryDomain)
], TenantOrganisation.prototype, "industry_domain", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tenant_organisation_address_entity_1.TenantOrganisationAddress),
    __metadata("design:type", tenant_organisation_address_entity_1.TenantOrganisationAddress)
], TenantOrganisation.prototype, "billingAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], TenantOrganisation.prototype, "isParent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TenantOrganisation_1, (tenantOrganisation) => tenantOrganisation.id, { nullable: true, onDelete: "CASCADE" }),
    __metadata("design:type", TenantOrganisation)
], TenantOrganisation.prototype, "tParentOrganisationId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_branch_entity_1.TenantBranch, (tenantBranch) => tenantBranch.organisation_id),
    __metadata("design:type", tenant_branch_entity_1.TenantBranch)
], TenantOrganisation.prototype, "Branch_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tuser_entity_1.Tuser, tUser => tUser.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tuser_entity_1.Tuser)
], TenantOrganisation.prototype, "tUserId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tenant_poc_entity_1.TenantPoc, tenantPoc => tenantPoc.tenantOrganisation_id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tenant_poc_entity_1.TenantPoc)
], TenantOrganisation.prototype, "tenantPoc_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TenantOrganisation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TenantOrganisation.prototype, "updatedAt", void 0);
TenantOrganisation = TenantOrganisation_1 = __decorate([
    (0, typeorm_1.Entity)()
], TenantOrganisation);
exports.TenantOrganisation = TenantOrganisation;
//# sourceMappingURL=tenant_organisation.entity.js.map