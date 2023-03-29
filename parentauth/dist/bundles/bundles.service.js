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
exports.BundlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bundle_entity_1 = require("./bundle.entity");
let BundlesService = class BundlesService {
    constructor(repo) {
        this.repo = repo;
    }
    create(data) {
        const bundle = this.repo.create(data);
        return this.repo.save(bundle);
    }
    find() {
        return this.repo.find();
    }
    findById(id) {
        return this.repo.findOne({ where: { id } });
    }
    async remove(id) {
        const bundle = await this.repo.findOne({ where: { id } });
        if (!bundle) {
            throw new common_1.NotFoundException('bundle not found');
        }
        return this.repo.remove(bundle);
    }
    findOneIncludeSubmodule(id) {
        return this.repo.findOne({
            where: { id },
            relations: {
                bsmaps: {
                    tsubmodule: true,
                },
            },
        });
    }
    async update(id, data) {
        const bundle = await this.repo.findOne({ where: { id } });
        if (!bundle) {
            throw new common_1.NotFoundException('bundle not found');
        }
        if (data.name)
            bundle.name = data.name;
        if (data.description)
            bundle.description = data.description;
        if (data.status)
            bundle.status = data.status;
        if (data.isPaid)
            bundle.isPaid = data.isPaid;
        return this.repo.save(bundle);
    }
};
BundlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bundle_entity_1.Bundle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BundlesService);
exports.BundlesService = BundlesService;
//# sourceMappingURL=bundles.service.js.map