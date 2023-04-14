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
exports.IndustryDomain = void 0;
const tenant_organisation_entity_1 = require("../../tenant_organisation/entities/tenant_organisation.entity");
const typeorm_1 = require("typeorm");
let IndustryDomain = class IndustryDomain {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], IndustryDomain.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], IndustryDomain.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_organisation_entity_1.TenantOrganisation, tenantOrganisation => tenantOrganisation.id, { nullable: false }),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], IndustryDomain.prototype, "tenantOrganisations", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IndustryDomain.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IndustryDomain.prototype, "updatedAt", void 0);
IndustryDomain = __decorate([
    (0, typeorm_1.Entity)()
], IndustryDomain);
exports.IndustryDomain = IndustryDomain;
//# sourceMappingURL=industry_domain.entity.js.map