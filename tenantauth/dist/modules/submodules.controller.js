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
exports.SubmodulesController = void 0;
const common_1 = require("@nestjs/common");
const create_submodule_dto_1 = require("./dtos/create-submodule.dto");
const submodules_service_1 = require("./submodules.service");
let SubmodulesController = class SubmodulesController {
    constructor(submodulesService) {
        this.submodulesService = submodulesService;
    }
    addModule(body) {
        this.submodulesService.create(body);
    }
    getModules() {
        return this.submodulesService.find();
    }
    async getModule(id) {
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_submodule_dto_1.CreateSubmoduleDto]),
    __metadata("design:returntype", void 0)
], SubmodulesController.prototype, "addModule", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubmodulesController.prototype, "getModules", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubmodulesController.prototype, "getModule", null);
SubmodulesController = __decorate([
    (0, common_1.Controller)('tenant_modules/sub'),
    __metadata("design:paramtypes", [submodules_service_1.SubmodulesService])
], SubmodulesController);
exports.SubmodulesController = SubmodulesController;
//# sourceMappingURL=submodules.controller.js.map