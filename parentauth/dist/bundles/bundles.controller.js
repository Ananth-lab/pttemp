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
exports.BundlesController = void 0;
const common_1 = require("@nestjs/common");
const bsmaps_service_1 = require("./bsmaps.service");
const bundles_service_1 = require("./bundles.service");
const create_bundle_body_dto_1 = require("./dtos/create-bundle-body.dto");
const update_bundle_dto_1 = require("./dtos/update-bundle.dto");
const update_bundle_submodule_dto_1 = require("./dtos/update-bundle-submodule.dto");
let BundlesController = class BundlesController {
    constructor(bundlesService, bsmapsService) {
        this.bundlesService = bundlesService;
        this.bsmapsService = bsmapsService;
    }
    async addBundle(body) {
        const bundle = await this.bundlesService.create(body);
        for (let i = 0; i < body.submoduleIds.length; i++) {
            const tsubmodule = body.submoduleIds[i];
            this.bsmapsService.create({ tsubmodule, bundle });
        }
        return bundle;
    }
    getBundles() {
        return this.bundlesService.find();
    }
    updateBundle(id, body) {
        return this.bundlesService.update(id, body);
    }
    deleteBundle(id) {
        return this.bundlesService.remove(id);
    }
    async getSubmodules(id) {
        const bundle = await this.bundlesService.findOneIncludeSubmodule(id);
        if (!bundle) {
            throw new common_1.NotFoundException('bundle not found');
        }
        return bundle;
    }
    async updateSubmodules(id, body) {
        const bundle = await this.bundlesService.findById(id);
        if (!bundle) {
            throw new common_1.NotFoundException('bundle not found!');
        }
        await this.bsmapsService.remove(bundle);
        for (let i = 0; i < body.submoduleIds.length; i++) {
            const tsubmodule = body.submoduleIds[i];
            this.bsmapsService.create({ tsubmodule, bundle });
        }
        return bundle;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bundle_body_dto_1.CreateBundleBodyDto]),
    __metadata("design:returntype", Promise)
], BundlesController.prototype, "addBundle", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BundlesController.prototype, "getBundles", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bundle_dto_1.UpdateBundleDto]),
    __metadata("design:returntype", void 0)
], BundlesController.prototype, "updateBundle", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BundlesController.prototype, "deleteBundle", null);
__decorate([
    (0, common_1.Get)('/:id/submodules'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BundlesController.prototype, "getSubmodules", null);
__decorate([
    (0, common_1.Patch)('/:id/submodules'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bundle_submodule_dto_1.UpdateBundleSubmoduleDto]),
    __metadata("design:returntype", Promise)
], BundlesController.prototype, "updateSubmodules", null);
BundlesController = __decorate([
    (0, common_1.Controller)('bundles'),
    __metadata("design:paramtypes", [bundles_service_1.BundlesService,
        bsmaps_service_1.BsmapsService])
], BundlesController);
exports.BundlesController = BundlesController;
//# sourceMappingURL=bundles.controller.js.map