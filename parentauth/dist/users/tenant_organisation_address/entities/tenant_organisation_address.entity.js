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
var TenantOrganisationAddress_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantOrganisationAddress = void 0;
const tenant_country_entity_1 = require("../../tenant_country/entities/tenant_country.entity");
const tenant_organisation_entity_1 = require("../../tenant_organisation/entities/tenant_organisation.entity");
const tenant_state_entity_1 = require("../../tenant_state/entities/tenant_state.entity");
const typeorm_1 = require("typeorm");
let TenantOrganisationAddress = TenantOrganisationAddress_1 = class TenantOrganisationAddress {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TenantOrganisationAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisationAddress.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisationAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisationAddress.prototype, "plot_no", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisationAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenant_state_entity_1.TenantState, (tenantState) => tenantState.id, {
        nullable: false,
    }),
    __metadata("design:type", tenant_state_entity_1.TenantState)
], TenantOrganisationAddress.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TenantOrganisationAddress.prototype, "post_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenant_country_entity_1.TenantCountry, (tenantCountry) => tenantCountry.id, {
        nullable: false,
    }),
    __metadata("design:type", tenant_country_entity_1.TenantCountry)
], TenantOrganisationAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tenant_organisation_entity_1.TenantOrganisation, (tenantOrganisation) => tenantOrganisation.billingAddress, { nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], TenantOrganisationAddress.prototype, "tenantOrganisationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], TenantOrganisationAddress.prototype, "isParent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TenantOrganisationAddress_1, (tenantOrganisationAddress) => tenantOrganisationAddress.id, { nullable: true, onDelete: "CASCADE" }),
    __metadata("design:type", TenantOrganisationAddress)
], TenantOrganisationAddress.prototype, "parentOaddress", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TenantOrganisationAddress.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TenantOrganisationAddress.prototype, "updatedAt", void 0);
TenantOrganisationAddress = TenantOrganisationAddress_1 = __decorate([
    (0, typeorm_1.Entity)()
], TenantOrganisationAddress);
exports.TenantOrganisationAddress = TenantOrganisationAddress;
//# sourceMappingURL=tenant_organisation_address.entity.js.map