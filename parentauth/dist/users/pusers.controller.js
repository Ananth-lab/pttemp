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
exports.PusersController = void 0;
const common_1 = require("@nestjs/common");
const pusers_service_1 = require("./pusers.service");
const auth_service_1 = require("./auth.service");
const create_puser_dto_1 = require("./dtos/create-puser.dto");
const signin_dto_1 = require("./dtos/signin.dto");
let PusersController = class PusersController {
    constructor(pusersService, authService) {
        this.pusersService = pusersService;
        this.authService = authService;
    }
    addUser(body) {
        return this.authService.psignup(body);
    }
    parentUserLogin(body) {
        return this.authService.pSignin(body.email, body.password);
    }
    getPusers() {
        return this.pusersService.findAllPusers();
    }
    getMe() {
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_puser_dto_1.CreatePuserDto]),
    __metadata("design:returntype", void 0)
], PusersController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SinginDto]),
    __metadata("design:returntype", void 0)
], PusersController.prototype, "parentUserLogin", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PusersController.prototype, "getPusers", null);
__decorate([
    (0, common_1.Get)('/me'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PusersController.prototype, "getMe", null);
PusersController = __decorate([
    (0, common_1.Controller)('parent_users'),
    __metadata("design:paramtypes", [pusers_service_1.PusersService,
        auth_service_1.AuthService])
], PusersController);
exports.PusersController = PusersController;
//# sourceMappingURL=pusers.controller.js.map