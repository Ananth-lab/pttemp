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
exports.IndustryDomainController = void 0;
const common_1 = require("@nestjs/common");
const industry_domain_service_1 = require("./industry_domain.service");
const create_industry_domain_dto_1 = require("./dto/create-industry_domain.dto");
const update_industry_domain_dto_1 = require("./dto/update-industry_domain.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let IndustryDomainController = class IndustryDomainController {
    constructor(industryDomainService) {
        this.industryDomainService = industryDomainService;
    }
    async create(createIndustryDomainDto) {
        return await this.industryDomainService.create(createIndustryDomainDto);
    }
    async findAll() {
        return await this.industryDomainService.findAll();
    }
    async update(id, updateIndustryDomainDto) {
        const domain = await this.industryDomainService.update(id, updateIndustryDomainDto);
        if (!domain)
            throw new common_1.HttpException("no data found", 404);
        return "data updated";
    }
    async remove(id) {
        return await this.industryDomainService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_industry_domain_dto_1.CreateIndustryDomainDto]),
    __metadata("design:returntype", Promise)
], IndustryDomainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndustryDomainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_industry_domain_dto_1.UpdateIndustryDomainDto]),
    __metadata("design:returntype", Promise)
], IndustryDomainController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IndustryDomainController.prototype, "remove", null);
IndustryDomainController = __decorate([
    (0, common_1.Controller)('industry-domain'),
    __metadata("design:paramtypes", [industry_domain_service_1.IndustryDomainService])
], IndustryDomainController);
exports.IndustryDomainController = IndustryDomainController;
//# sourceMappingURL=industry_domain.controller.js.map