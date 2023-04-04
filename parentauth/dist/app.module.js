"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const privileges_module_1 = require("./privileges/privileges.module");
const roles_module_1 = require("./roles/roles.module");
const users_module_1 = require("./users/users.module");
const pmodules_module_1 = require("./pmodules/pmodules.module");
const role_entity_1 = require("./roles/role.entity");
const privilege_entity_1 = require("./privileges/privilege.entity");
const pmodule_entity_1 = require("./pmodules/pmodule.entity");
const psubmodule_entity_1 = require("./pmodules/psubmodule.entity");
const rac_map_entity_1 = require("./roles/rac-map.entity");
const tuser_entity_1 = require("./users/tuser.entity");
const puser_entity_1 = require("./users/puser.entity");
const bundles_module_1 = require("./bundles/bundles.module");
const bundle_entity_1 = require("./bundles/bundle.entity");
const tmodules_module_1 = require("./tmodules/tmodules.module");
const tmodule_entity_1 = require("./tmodules/tmodule.entity");
const tsubmodule_entity_1 = require("./tmodules/tsubmodule.entity");
const bsmap_entity_1 = require("./bundles/bsmap.entity");
const tenant_organisation_module_1 = require("./users/tenant_organisation/tenant_organisation.module");
const tenant_organisation_entity_1 = require("./users/tenant_organisation/entities/tenant_organisation.entity");
const tenant_profile_module_1 = require("./users/tenant_profile/tenant_profile.module");
const tenant_profile_entity_1 = require("./users/tenant_profile/entities/tenant_profile.entity");
const tenant_branch_entity_1 = require("./users/tenant_branch/entities/tenant_branch.entity");
const tenant_branch_module_1 = require("./users/tenant_branch/tenant_branch.module");
const tenant_branch_address_module_1 = require("./users/tenant_branch_address/tenant_branch_address.module");
const tenant_branch_address_entity_1 = require("./users/tenant_branch_address/entities/tenant_branch_address.entity");
const tenant_poc_entity_1 = require("./users/tenant_poc/entities/tenant_poc.entity");
const tenant_poc_module_1 = require("./users/tenant_poc/tenant_poc.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        database: "parentauth",
                        type: "postgres",
                        host: "localhost",
                        port: 5432,
                        username: "ananth",
                        password: "u7i8o9p0",
                        synchronize: true,
                        entities: [
                            tenant_organisation_entity_1.TenantOrganisation,
                            role_entity_1.Role,
                            privilege_entity_1.Privilege,
                            tenant_profile_entity_1.TenantProfile,
                            tenant_branch_entity_1.TenantBranch,
                            tenant_branch_address_entity_1.TenantBranchAddress,
                            tenant_poc_entity_1.TenantPoc,
                            pmodule_entity_1.Pmodule,
                            psubmodule_entity_1.Psubmodule,
                            rac_map_entity_1.Racmap,
                            tuser_entity_1.Tuser,
                            puser_entity_1.Puser,
                            bundle_entity_1.Bundle,
                            tmodule_entity_1.Tmodule,
                            tsubmodule_entity_1.Tsubmodule,
                            bsmap_entity_1.Bsmap,
                        ],
                    };
                },
            }),
            privileges_module_1.PrivilegesModule,
            tenant_organisation_module_1.TenantOrganisationModule,
            tenant_branch_module_1.TenantBranchModule,
            tenant_branch_address_module_1.TenantBranchAddressModule,
            tenant_poc_module_1.TenantPocModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            pmodules_module_1.PmodulesModule,
            tenant_profile_module_1.TenantProfileModule,
            bundles_module_1.BundlesModule,
            tmodules_module_1.TmodulesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map