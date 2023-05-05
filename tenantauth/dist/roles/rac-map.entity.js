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
exports.Racmap = void 0;
const privilege_entity_1 = require("../privileges/privilege.entity");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
let Racmap = class Racmap {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Racmap.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.racs, { onDelete: "CASCADE" }),
    __metadata("design:type", role_entity_1.Role)
], Racmap.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array", { nullable: true }),
    __metadata("design:type", Array)
], Racmap.prototype, "submoduleId", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array", { nullable: true }),
    __metadata("design:type", Array)
], Racmap.prototype, "moduleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => privilege_entity_1.Privilege, (privilege) => privilege.racs),
    __metadata("design:type", privilege_entity_1.Privilege)
], Racmap.prototype, "privilegeId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Racmap.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Racmap.prototype, "updatedAt", void 0);
Racmap = __decorate([
    (0, typeorm_1.Entity)()
], Racmap);
exports.Racmap = Racmap;
//# sourceMappingURL=rac-map.entity.js.map