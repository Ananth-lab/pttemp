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
exports.PrivilegesController = void 0;
const common_1 = require("@nestjs/common");
const privileges_service_1 = require("./privileges.service");
const create_privilege_dto_1 = require("./dtos/create-privilege.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let PrivilegesController = class PrivilegesController {
    constructor(privilegesService) {
        this.privilegesService = privilegesService;
    }
    addPrivilege(body) {
        return this.privilegesService.create(body);
    }
    getPrivileges() {
        return this.privilegesService.find();
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_privilege_dto_1.CreatePrivilegeDto]),
    __metadata("design:returntype", void 0)
], PrivilegesController.prototype, "addPrivilege", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrivilegesController.prototype, "getPrivileges", null);
PrivilegesController = __decorate([
    (0, common_1.Controller)("privileges"),
    __metadata("design:paramtypes", [privileges_service_1.PrivilegesService])
], PrivilegesController);
exports.PrivilegesController = PrivilegesController;
//# sourceMappingURL=privileges.controller.js.map