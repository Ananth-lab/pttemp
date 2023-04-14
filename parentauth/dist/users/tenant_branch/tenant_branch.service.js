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
exports.TenantBranchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_branch_entity_1 = require("./entities/tenant_branch.entity");
const typeorm_2 = require("typeorm");
let TenantBranchService = class TenantBranchService {
    constructor(branchRep) {
        this.branchRep = branchRep;
    }
    async create(createTenantBranchDto) {
        try {
            return await this.branchRep.save(createTenantBranchDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTenantBranchDto) {
        try {
            const branch = await this.branchRep.findOne({ where: { id: id } });
            if (!branch)
                return branch;
            if (updateTenantBranchDto.gstin) {
                branch.gstin = updateTenantBranchDto.gstin;
            }
            if (updateTenantBranchDto.isparent == true ||
                updateTenantBranchDto.isparent == false) {
                branch.isparent = updateTenantBranchDto.isparent;
            }
            if (updateTenantBranchDto.name) {
                branch.name = updateTenantBranchDto.name;
            }
            return await this.branchRep.save(branch);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
TenantBranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_branch_entity_1.TenantBranch)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenantBranchService);
exports.TenantBranchService = TenantBranchService;
//# sourceMappingURL=tenant_branch.service.js.map