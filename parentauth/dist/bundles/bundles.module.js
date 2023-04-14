"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundlesModule = void 0;
const common_1 = require("@nestjs/common");
const bundles_controller_1 = require("./bundles.controller");
const bundles_service_1 = require("./bundles.service");
const typeorm_1 = require("@nestjs/typeorm");
const bundle_entity_1 = require("./bundle.entity");
const bsmaps_service_1 = require("./bsmaps.service");
const bsmap_entity_1 = require("./bsmap.entity");
let BundlesModule = class BundlesModule {
};
BundlesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bundle_entity_1.Bundle, bsmap_entity_1.Bsmap])],
        controllers: [bundles_controller_1.BundlesController],
        providers: [bundles_service_1.BundlesService, bsmaps_service_1.BsmapsService],
    })
], BundlesModule);
exports.BundlesModule = BundlesModule;
//# sourceMappingURL=bundles.module.js.map