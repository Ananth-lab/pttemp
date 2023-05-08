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
exports.ModulesController = void 0;
const common_1 = require("@nestjs/common");
const create_module_dto_1 = require("./dtos/create-module.dto");
const pmodules_service_1 = require("./pmodules.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ModulesController = class ModulesController {
    constructor(pmodulesService) {
        this.pmodulesService = pmodulesService;
    }
    addModule(body) {
        return this.pmodulesService.create(body);
    }
    getModules() {
        return this.pmodulesService.find();
    }
    async getModule(id) {
        const module = await this.pmodulesService.findOne(id);
        if (!module) {
            throw new common_1.NotFoundException("Module not found");
        }
        return module;
    }
    async getSubmodules(id) {
        const module = await this.pmodulesService.findOneIncludeSubmodule(id);
        if (!module) {
            throw new common_1.NotFoundException("Module not found");
        }
        return module;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_module_dto_1.CreateModuleDto]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "addModule", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "getModules", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "getModule", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("/:id/submodules"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "getSubmodules", null);
ModulesController = __decorate([
    (0, common_1.Controller)("parent_modules"),
    __metadata("design:paramtypes", [pmodules_service_1.PmodulesService])
], ModulesController);
exports.ModulesController = ModulesController;
//# sourceMappingURL=pmodules.controller.js.map