"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TmodulesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tmodules_controller_1 = require("./tmodules.controller");
const tmodules_service_1 = require("./tmodules.service");
const tmodule_entity_1 = require("./tmodule.entity");
const tsubmodule_entity_1 = require("./tsubmodule.entity");
const tsubmodules_service_1 = require("./tsubmodules.service");
const tsubmodules_controller_1 = require("./tsubmodules.controller");
let TmodulesModule = class TmodulesModule {
};
TmodulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tmodule_entity_1.Tmodule, tsubmodule_entity_1.Tsubmodule])],
        controllers: [tmodules_controller_1.TmodulesController, tsubmodules_controller_1.TsubmodulesController],
        providers: [tmodules_service_1.TmodulesService, tsubmodules_service_1.TsubmodulesService],
    })
], TmodulesModule);
exports.TmodulesModule = TmodulesModule;
//# sourceMappingURL=tmodules.module.js.map