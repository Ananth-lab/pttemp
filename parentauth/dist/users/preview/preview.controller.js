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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewController = void 0;
const common_1 = require("@nestjs/common");
const tenant_organisation_address_service_1 = require("../tenant_organisation_address/tenant_organisation_address.service");
let PreviewController = class PreviewController {
    constructor(tenantAddress) {
        this.tenantAddress = tenantAddress;
    }
    findOne(id) {
        return this.tenantAddress.findOne(id);
    }
    catch(error) {
        throw new Error(`Error fetching preview data: ${error.message}`);
    }
    async finalSubmit(type) {
        const { industry_domain, organisationId } = type;
        return [industry_domain, organisationId];
    }
};
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreviewController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PreviewController.prototype, "finalSubmit", null);
PreviewController = __decorate([
    (0, common_1.Controller)("preview"),
    __metadata("design:paramtypes", [tenant_organisation_address_service_1.TenantOrganisationAddressService])
], PreviewController);
exports.PreviewController = PreviewController;
//# sourceMappingURL=preview.controller.js.map