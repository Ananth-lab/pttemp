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
exports.Tsubmodule = exports.status = void 0;
const bsmap_entity_1 = require("../bundles/bsmap.entity");
const typeorm_1 = require("typeorm");
const tmodule_entity_1 = require("./tmodule.entity");
var status;
(function (status) {
    status["ACTIVE"] = "active";
    status["DISABLED"] = "disabled";
})(status = exports.status || (exports.status = {}));
let Tsubmodule = class Tsubmodule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Tsubmodule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tsubmodule.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Tsubmodule.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tsubmodule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status,
        default: status.ACTIVE,
    }),
    __metadata("design:type", String)
], Tsubmodule.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => bsmap_entity_1.Bsmap, (bsmap) => bsmap.tsubmodule),
    __metadata("design:type", Array)
], Tsubmodule.prototype, "bsmaps", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => tmodule_entity_1.Tmodule, (tmodule) => tmodule.submodules, {
        nullable: false,
    }),
    __metadata("design:type", tmodule_entity_1.Tmodule)
], Tsubmodule.prototype, "tmodule", void 0);
Tsubmodule = __decorate([
    (0, typeorm_1.Entity)()
], Tsubmodule);
exports.Tsubmodule = Tsubmodule;
//# sourceMappingURL=tsubmodule.entity.js.map