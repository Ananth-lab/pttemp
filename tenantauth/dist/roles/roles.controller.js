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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const create_role_body_dto_1 = require("./dtos/create-role-body.dto");
const update_role_body_dto_1 = require("./dtos/update-role-body.dto");
const rac_maps_service_1 = require("./rac-maps.service");
const roles_service_1 = require("./roles.service");
let RolesController = class RolesController {
    constructor(rolesService, racmapsService) {
        this.rolesService = rolesService;
        this.racmapsService = racmapsService;
    }
    async createRole(body) {
        const role = await this.rolesService.create(body);
        for (let i = 0; i < body.rac.length; i++) {
            const tmp = body.rac[i];
            this.racmapsService.create(Object.assign(Object.assign({}, tmp), { roleId: role }));
        }
        return role;
    }
    getRoles() {
        return this.rolesService.find();
    }
    async getRole(id) {
        const role = await this.rolesService.findOneIncludeSubmodule(id);
        if (!role) {
            throw new common_1.NotFoundException('not found');
        }
        return role;
    }
    async updateRoleDetails(id, body) {
        const role = await this.rolesService.remove(id);
        this.racmapsService.remove(role);
        for (let i = 0; i < body.rac.length; i++) {
            const tmp = body.rac[i];
            this.racmapsService.create(Object.assign(Object.assign({}, tmp), { roleId: role }));
        }
    }
    deleteModule(id) {
        return this.rolesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_body_dto_1.CreateRoleBodyDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "createRole", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRole", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_body_dto_1.UpdateRoleBodyDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateRoleDetails", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "deleteModule", null);
RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService,
        rac_maps_service_1.RacmapsService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map