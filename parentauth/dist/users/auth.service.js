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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const tusers_service_1 = require("./tusers.service");
const pusers_service_1 = require("./pusers.service");
const crypto_1 = require("crypto");
const util_1 = require("util");
const jwt_1 = require("@nestjs/jwt");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(tusersService, pusersService, jwtService) {
        this.tusersService = tusersService;
        this.pusersService = pusersService;
        this.jwtService = jwtService;
    }
    async psignup(body) {
        const users = await this.pusersService.find(body.email);
        if (users.length) {
            throw new common_1.BadRequestException('email in use');
        }
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(body.password, salt, 32));
        const result = salt + '.' + hash.toString('hex');
        console.log(result);
        const user = await this.pusersService.create(Object.assign(Object.assign({}, body), { password: result }));
        return user;
    }
    async pSignin(email, password) {
        const [user] = await this.pusersService.find(email);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const [salt, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, salt, 32));
        if (storedHash !== hash.toString('hex')) {
            throw new common_1.BadRequestException('wrong email or password');
        }
        const token = this.jwtService.sign({ id: user.id, model: user.model }, {
            secret: 'this is secret key',
        });
        return { user, token };
    }
    async tsignup(body) {
        const users = await this.tusersService.find(body.email);
        if (users.length) {
            throw new common_1.BadRequestException('email in use');
        }
        if (!body.password) {
            const passwordLength = 10;
            const buffer = await (0, util_1.promisify)(crypto_1.randomBytes)(passwordLength);
            const randomPassword = buffer.toString('hex');
            body.password = randomPassword;
        }
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(body.password, salt, 32));
        const result = salt + '.' + hash.toString('hex');
        const user = await this.tusersService.create(Object.assign(Object.assign({}, body), { password: result }));
        return user;
    }
    async tSignin(email, password) {
        const [user] = await this.tusersService.find(email);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const [salt, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, salt, 32));
        if (storedHash !== hash.toString('hex')) {
            throw new common_1.BadRequestException('wrong email or password');
        }
        const token = this.jwtService.sign({ id: user.id, model: user.model }, {
            secret: 'this is secret key',
        });
        return { user, token };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tusers_service_1.TusersService,
        pusers_service_1.PusersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map