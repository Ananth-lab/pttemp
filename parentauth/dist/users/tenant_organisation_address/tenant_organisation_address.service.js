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
exports.TenantOrganisationAddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_organisation_address_entity_1 = require("./entities/tenant_organisation_address.entity");
const typeorm_2 = require("typeorm");
let TenantOrganisationAddressService = class TenantOrganisationAddressService {
    constructor(repoOrAd) {
        this.repoOrAd = repoOrAd;
    }
    async create(createTenantOrganisationAddressDto) {
        try {
            return await this.repoOrAd.save(createTenantOrganisationAddressDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTenantOrganisationAddressDto) {
        try {
            const orgAdd = await this.repoOrAd.findOne({ where: { id } });
            if (!orgAdd)
                return orgAdd;
            if (updateTenantOrganisationAddressDto.name) {
                orgAdd.name = updateTenantOrganisationAddressDto.name;
            }
            if (updateTenantOrganisationAddressDto.address) {
                orgAdd.address = updateTenantOrganisationAddressDto.address;
            }
            if (updateTenantOrganisationAddressDto.plot_no) {
                orgAdd.plot_no = updateTenantOrganisationAddressDto.plot_no;
            }
            if (updateTenantOrganisationAddressDto.city) {
                orgAdd.city = updateTenantOrganisationAddressDto.city;
            }
            if (updateTenantOrganisationAddressDto.state) {
                orgAdd.state = updateTenantOrganisationAddressDto.state;
            }
            if (updateTenantOrganisationAddressDto.post_code) {
                orgAdd.post_code = updateTenantOrganisationAddressDto.post_code;
            }
            if (updateTenantOrganisationAddressDto.country) {
                orgAdd.country = updateTenantOrganisationAddressDto.country;
            }
            return await this.repoOrAd.save(orgAdd);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            return await this.repoOrAd.delete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantOrganisationAddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_organisation_address_entity_1.TenantOrganisationAddress)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantOrganisationAddressService);
exports.TenantOrganisationAddressService = TenantOrganisationAddressService;
//# sourceMappingURL=tenant_organisation_address.service.js.map