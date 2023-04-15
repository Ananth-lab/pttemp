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
exports.Privilege = void 0;
const rac_map_entity_1 = require("../roles/rac-map.entity");
const typeorm_1 = require("typeorm");
let Privilege = class Privilege {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Privilege.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Privilege.prototype, "privilegeName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rac_map_entity_1.Racmap, (racmap) => racmap.privilegeId),
    __metadata("design:type", Array)
], Privilege.prototype, "racs", void 0);
Privilege = __decorate([
    (0, typeorm_1.Entity)()
], Privilege);
exports.Privilege = Privilege;
//# sourceMappingURL=privilege.entity.js.map