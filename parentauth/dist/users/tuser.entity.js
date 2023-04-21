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
exports.Tuser = exports.status = void 0;
const typeorm_1 = require("typeorm");
const tenant_organisation_entity_1 = require("./tenant_organisation/entities/tenant_organisation.entity");
var status;
(function (status) {
    status["PENDING"] = "pending";
    status["ACTIVE"] = "active";
    status["DISABLED"] = "disabled";
})(status = exports.status || (exports.status = {}));
let Tuser = class Tuser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Tuser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "profileImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Tuser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Tuser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Tuser.prototype, "isEmailVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Tuser.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Tuser.prototype, "isMobileVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Tuser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status,
        default: status.ACTIVE,
    }),
    __metadata("design:type", String)
], Tuser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'tenant_user' }),
    __metadata("design:type", String)
], Tuser.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "emailVerifyToken", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tenant_organisation_entity_1.TenantOrganisation, tenantOrganisation => tenantOrganisation.tUserId),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tenant_organisation_entity_1.TenantOrganisation)
], Tuser.prototype, "orgId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "emailVerifyExpires", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "mobileVerifyToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "mobileVerifyExpires", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "passwordResetToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "passwordResetExpires", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tuser.prototype, "otpExpires", void 0);
Tuser = __decorate([
    (0, typeorm_1.Entity)()
], Tuser);
exports.Tuser = Tuser;
//# sourceMappingURL=tuser.entity.js.map