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
exports.TenantState = void 0;
const tenant_country_entity_1 = require("../../tenant_country/entities/tenant_country.entity");
const tenant_organisation_address_entity_1 = require("../../tenant_organisation_address/entities/tenant_organisation_address.entity");
const typeorm_1 = require("typeorm");
let TenantState = class TenantState {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TenantState.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], TenantState.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tenant_country_entity_1.TenantCountry, tenantCountry => tenantCountry.id, { nullable: false }),
    __metadata("design:type", tenant_country_entity_1.TenantCountry)
], TenantState.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_organisation_address_entity_1.TenantOrganisationAddress, address => address.state),
    __metadata("design:type", tenant_organisation_address_entity_1.TenantOrganisationAddress)
], TenantState.prototype, "tOrgnisationAddress", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TenantState.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TenantState.prototype, "updatedAt", void 0);
TenantState = __decorate([
    (0, typeorm_1.Entity)()
], TenantState);
exports.TenantState = TenantState;
//# sourceMappingURL=tenant_state.entity.js.map