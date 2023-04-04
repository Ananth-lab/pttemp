"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tusers_controller_1 = require("./tusers.controller");
const pusers_controller_1 = require("./pusers.controller");
const tusers_service_1 = require("./tusers.service");
const pusers_service_1 = require("./pusers.service");
const auth_service_1 = require("./auth.service");
const tuser_entity_1 = require("./tuser.entity");
const puser_entity_1 = require("./puser.entity");
const jwt_1 = require("@nestjs/jwt");
const tenant_organisation_module_1 = require("./tenant_organisation/tenant_organisation.module");
const tenant_organisation_address_module_1 = require("./tenant_organisation_address/tenant_organisation_address.module");
const tenant_profile_module_1 = require("./tenant_profile/tenant_profile.module");
const tenant_branch_module_1 = require("./tenant_branch/tenant_branch.module");
const tenant_poc_module_1 = require("./tenant_poc/tenant_poc.module");
const tenant_branch_address_module_1 = require("./tenant_branch_address/tenant_branch_address.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tuser_entity_1.Tuser, puser_entity_1.Puser]), tenant_organisation_module_1.TenantOrganisationModule, tenant_organisation_address_module_1.TenantOrganisationAddressModule, tenant_profile_module_1.TenantProfileModule, tenant_branch_module_1.TenantBranchModule, tenant_poc_module_1.TenantPocModule, tenant_branch_address_module_1.TenantBranchAddressModule],
        controllers: [tusers_controller_1.TusersController, pusers_controller_1.PusersController],
        providers: [tusers_service_1.TusersService, pusers_service_1.PusersService, auth_service_1.AuthService, jwt_1.JwtService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map