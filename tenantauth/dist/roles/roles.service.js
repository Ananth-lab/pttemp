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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const role_entity_1 = require("./role.entity");
let RolesService = class RolesService {
    constructor(repo) {
        this.repo = repo;
    }
    create(data) {
        const role = this.repo.create(data);
        return this.repo.save(role);
    }
    find() {
        return this.repo.find();
    }
    findOneIncludeSubmodule(id) {
        return this.repo.findOne({
            where: { id },
            relations: {
                racs: {
                    privilegeId: true,
                    submoduleId: true,
                },
            },
        });
    }
    async remove(id) {
        const role = await this.repo.findOne({ where: { id } });
        if (!role) {
            throw new common_1.NotFoundException('role not found');
        }
        this.repo.remove(role);
        return role;
    }
    async update(id, data) {
        const role = await this.repo.findOne({ where: { id } });
        if (!role) {
            throw new common_1.NotFoundException('role not found');
        }
        if (data.name)
            role.name = data.name;
        if (data.description)
            role.description = data.description;
        return this.repo.save(role);
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map