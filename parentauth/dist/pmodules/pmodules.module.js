"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmodulesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pmodules_controller_1 = require("./pmodules.controller");
const pmodules_service_1 = require("./pmodules.service");
const pmodule_entity_1 = require("./pmodule.entity");
const psubmodule_entity_1 = require("./psubmodule.entity");
const psubmodules_controller_1 = require("./psubmodules.controller");
const psubmodules_service_1 = require("./psubmodules.service");
let PmodulesModule = class PmodulesModule {
};
PmodulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pmodule_entity_1.Pmodule, psubmodule_entity_1.Psubmodule])],
        controllers: [pmodules_controller_1.ModulesController, psubmodules_controller_1.PsubmodulesController],
        providers: [pmodules_service_1.PmodulesService, psubmodules_service_1.PsubmodulesService],
    })
], PmodulesModule);
exports.PmodulesModule = PmodulesModule;
//# sourceMappingURL=pmodules.module.js.map