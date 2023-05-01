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
const rabbit_1 = require("../rabbit");
const tenant_poc_service_1 = require("../tenant_poc/tenant_poc.service");
const subscription_service_1 = require("../../subscription/subscription.service");
let PreviewController = class PreviewController {
    constructor(tenantAddress, tenantPoc, tenantSubscription) {
        this.tenantAddress = tenantAddress;
        this.tenantPoc = tenantPoc;
        this.tenantSubscription = tenantSubscription;
    }
    findOne(id) {
        try {
            return this.tenantAddress.findOne(id);
        }
        catch (error) {
            throw new Error(`Error fetching preview data: ${error.message}`);
        }
    }
    async finalSubmit(data) {
        const tenantOrgAdddressDetail = data;
        const tenantOrgAdddressDetails = {};
        for (const [key, value] of Object.entries(data)) {
            if (typeof value !== "object" || value === null) {
                tenantOrgAdddressDetails[key] = value;
            }
        }
        const tenantOrganisationDetail = data.tenantOrganisationId;
        const tenantOrganisationDetails = {};
        for (const [key, value] of Object.entries(tenantOrganisationDetail)) {
            if (typeof value !== "object" || value === null) {
                tenantOrganisationDetails[key] = value;
            }
        }
        const tenantUserDetail = tenantOrganisationDetail.tUserId;
        const tenantUserDetails = {};
        for (const [key, value] of Object.entries(tenantUserDetail)) {
            if (typeof value !== "object" || value === null) {
                tenantUserDetails[key] = value;
            }
        }
        const tenantIndustyDetails = tenantOrganisationDetail.industry_domain;
        const tenantCountryDetails = data.country;
        const tenantStateDetails = data.state;
        tenantStateDetails.countryId = tenantCountryDetails.id;
        tenantOrgAdddressDetails.state = tenantStateDetails.id;
        tenantOrgAdddressDetails.country = tenantCountryDetails.id;
        tenantOrganisationDetails.tUserId = tenantUserDetails.id;
        tenantOrganisationDetails.industry_domain = tenantIndustyDetails.id;
        tenantOrgAdddressDetails.tenantOrganisationId =
            tenantOrganisationDetails.id;
        const tenantPocDetails = await this.tenantPoc.findOneOnOrg(tenantOrganisationDetail.id);
        tenantPocDetails.tenantOrganisation_id = tenantOrganisationDetail.id;
        const tenantSubscriptionDetails = await this.tenantSubscription.findOneByTuserId(tenantUserDetail.id);
        const rabbitConnection = await (0, rabbit_1.connectRabbitMQ)();
        if (!rabbitConnection) {
            throw new Error("Failed to connect to RabbitMQ");
        }
        const { channel, exchange } = rabbitConnection;
        setTimeout(async () => {
            await channel.publish(exchange, "tenantUserDetails", Buffer.from(JSON.stringify({
                tenantUserDetails,
            })));
        }, 100);
        setTimeout(async () => {
            await channel.publish(exchange, "tenantCountryDetails", Buffer.from(JSON.stringify({
                tenantCountryDetails,
            })));
        }, 200);
        setTimeout(async () => {
            await channel.publish(exchange, "tenantIndustyDetails", Buffer.from(JSON.stringify({
                tenantIndustyDetails,
            })));
        }, 300);
        setTimeout(async () => {
            await channel.publish(exchange, "tenantStateDetails", Buffer.from(JSON.stringify({
                tenantStateDetails,
            })));
        }, 400);
        setTimeout(async () => {
            await channel.publish(exchange, "tenantOrganisationDetails", Buffer.from(JSON.stringify({
                tenantOrganisationDetails,
            })));
        }, 500);
        setTimeout(async () => {
            await channel.publish(exchange, "tenantPocDetails", Buffer.from(JSON.stringify({
                tenantPocDetails,
            })));
        }, 600);
        setTimeout(() => {
            channel.publish(exchange, "tenantOrgAdddressDetails", Buffer.from(JSON.stringify({
                tenantOrgAdddressDetails,
            })));
        }, 700);
        setTimeout(() => {
            channel.publish(exchange, "tenantSubscriptionDetails", Buffer.from(JSON.stringify({
                tenantSubscriptionDetails,
            })));
        }, 800);
        console.log("Data has been sent");
        return tenantUserDetails;
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
    __metadata("design:paramtypes", [tenant_organisation_address_service_1.TenantOrganisationAddressService,
        tenant_poc_service_1.TenantPocService,
        subscription_service_1.SubscriptionService])
], PreviewController);
exports.PreviewController = PreviewController;
//# sourceMappingURL=preview.controller.js.map