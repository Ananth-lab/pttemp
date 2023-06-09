"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TusersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tusers_controller_1 = require("./tusers.controller");
const tusers_service_1 = require("./tusers.service");
const auth_service_1 = require("./auth.service");
const tuser_entity_1 = require("./tuser.entity");
let TusersModule = class TusersModule {
};
TusersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tuser_entity_1.Tuser])],
        controllers: [tusers_controller_1.TusersController],
        providers: [tusers_service_1.TusersService, auth_service_1.AuthService],
    })
], TusersModule);
exports.TusersModule = TusersModule;
//# sourceMappingURL=tusers.module.js.map