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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const crypto_1 = require("crypto");
const tusers_service_1 = require("../tenantUser/tusers/tusers.service");
const crypto_2 = require("crypto");
const util_1 = require("util");
const scryptAsync = (0, util_1.promisify)(crypto_2.scrypt);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userService.findOne(email);
        if (user && user.password == password) {
            const { password, email } = user, rest = __rest(user, ["password", "email"]);
            return rest;
        }
        return null;
    }
    async signup(body) {
        const user = await this.userService.findOne(body.email);
        if (user) {
            throw new common_1.BadRequestException('email in use');
        }
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scryptAsync(body.password, salt, 32));
        const result = salt + '.' + hash.toString('hex');
        const newuser = await this.userService.create(Object.assign(Object.assign({}, body), { password: result }));
        return newuser;
    }
    async login(user) {
        const payload = { id: user.id, model: user.model };
        const token = this.jwtService.sign(payload, {
            secret: "this is secret key",
        });
        return { accessToken: token };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tusers_service_1.TusersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map