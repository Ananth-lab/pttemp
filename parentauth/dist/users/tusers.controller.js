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
exports.TusersController = void 0;
const common_1 = require("@nestjs/common");
const tusers_service_1 = require("./tusers.service");
const create_tuser_dto_1 = require("./dtos/create-tuser.dto");
const update_tuser_dto_1 = require("./dtos/update-tuser.dto");
const auth_service_1 = require("../auth/auth.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TusersController = class TusersController {
    constructor(tusersService, authService) {
        this.tusersService = tusersService;
        this.authService = authService;
    }
    addUser(body) {
        return this.authService.tsignup(body);
    }
    async update(id, body) {
        const organisation = await this.tusersService.update(id, body);
        if (!organisation)
            throw new common_1.HttpException("no data found", 404);
        return "data updated";
    }
    getTusers() {
        return this.tusersService.findAllTusers();
    }
    getAPuser(id) {
        return this.tusersService.findOne(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)("/signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tuser_dto_1.CreateTuserDto]),
    __metadata("design:returntype", void 0)
], TusersController.prototype, "addUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tuser_dto_1.UpdateTuserDto]),
    __metadata("design:returntype", Promise)
], TusersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TusersController.prototype, "getTusers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TusersController.prototype, "getAPuser", null);
TusersController = __decorate([
    (0, common_1.Controller)("tenant_users"),
    __metadata("design:paramtypes", [tusers_service_1.TusersService,
        auth_service_1.AuthService])
], TusersController);
exports.TusersController = TusersController;
//# sourceMappingURL=tusers.controller.js.map