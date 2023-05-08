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
exports.UpdateTenantPocDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tenant_poc_dto_1 = require("./create-tenant_poc.dto");
const class_validator_1 = require("class-validator");
const tenant_organisation_entity_1 = require("../../tenant_organisation/entities/tenant_organisation.entity");
class UpdateTenantPocDto extends (0, mapped_types_1.PartialType)(create_tenant_poc_dto_1.CreateTenantPocDto) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantPocDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateTenantPocDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)(null),
    __metadata("design:type", String)
], UpdateTenantPocDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(null),
    __metadata("design:type", String)
], UpdateTenantPocDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], UpdateTenantPocDto.prototype, "tenantOrganisation_id", void 0);
exports.UpdateTenantPocDto = UpdateTenantPocDto;
//# sourceMappingURL=update-tenant_poc.dto.js.map