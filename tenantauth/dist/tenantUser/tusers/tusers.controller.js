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
const auth_service_1 = require("./auth.service");
const create_tuser_dto_1 = require("./dtos/create-tuser.dto");
let TusersController = class TusersController {
    constructor(tusersService, authService) {
        this.tusersService = tusersService;
        this.authService = authService;
    }
    getAll() {
        return this.tusersService.find();
    }
    getUserById(id) {
        return this.tusersService.findById(id);
    }
    addUser(body) {
        return this.authService.signup(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TusersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TusersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tuser_dto_1.CreateTuserDto]),
    __metadata("design:returntype", void 0)
], TusersController.prototype, "addUser", null);
TusersController = __decorate([
    (0, common_1.Controller)('tenant_users'),
    __metadata("design:paramtypes", [tusers_service_1.TusersService,
        auth_service_1.AuthService])
], TusersController);
exports.TusersController = TusersController;
//# sourceMappingURL=tusers.controller.js.map