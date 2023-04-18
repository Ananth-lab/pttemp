"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modules_controller_1 = require("./modules.controller");
const modules_service_1 = require("./modules.service");
const module_entity_1 = require("./module.entity");
const submodule_entity_1 = require("./submodule.entity");
const submodules_controller_1 = require("./submodules.controller");
const submodules_service_1 = require("./submodules.service");
let ModulesModule = class ModulesModule {
};
ModulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([module_entity_1.Tmodule, submodule_entity_1.Submodule])],
        controllers: [modules_controller_1.ModulesController, submodules_controller_1.SubmodulesController],
        providers: [modules_service_1.ModulesService, submodules_service_1.SubmodulesService],
    })
], ModulesModule);
exports.ModulesModule = ModulesModule;
//# sourceMappingURL=modules.module.js.map