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
exports.Tmodule = exports.status = void 0;
const typeorm_1 = require("typeorm");
const tsubmodule_entity_1 = require("./tsubmodule.entity");
const subscription_entity_1 = require("../subscription/entities/subscription.entity");
var status;
(function (status) {
    status["ACTIVE"] = "active";
    status["DISABLED"] = "disabled";
})(status = exports.status || (exports.status = {}));
let Tmodule = class Tmodule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Tmodule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tmodule.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Tmodule.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tmodule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: status,
        default: status.ACTIVE,
    }),
    __metadata("design:type", String)
], Tmodule.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.Subscription, (sub) => sub.module),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Tmodule)
], Tmodule.prototype, "subscriptionId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => tsubmodule_entity_1.Tsubmodule, (tsubmodule) => tsubmodule.tmodule),
    __metadata("design:type", Array)
], Tmodule.prototype, "submodules", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tmodule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tmodule.prototype, "updatedAt", void 0);
Tmodule = __decorate([
    (0, typeorm_1.Entity)()
], Tmodule);
exports.Tmodule = Tmodule;
//# sourceMappingURL=tmodule.entity.js.map