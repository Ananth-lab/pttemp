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
const tusers_module_1 = require("./tenantUser/tusers/tusers.module");
const modules_module_1 = require("./modules/modules.module");
const role_entity_1 = require("./roles/role.entity");
const privilege_entity_1 = require("./privileges/privilege.entity");
const module_entity_1 = require("./modules/module.entity");
const submodule_entity_1 = require("./modules/submodule.entity");
const rac_map_entity_1 = require("./roles/rac-map.entity");
const tuser_entity_1 = require("./tenantUser/tusers/tuser.entity");
const tenant_organisation_entity_1 = require("./tenantUser/tenant_organisation/entities/tenant_organisation.entity");
const tenant_organisation_address_entity_1 = require("./tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity");
const tenant_poc_entity_1 = require("./tenantUser/tenant_poc/entities/tenant_poc.entity");
const tenant_organisation_module_1 = require("./tenantUser/tenant_organisation/tenant_organisation.module");
const tenant_organisation_address_module_1 = require("./tenantUser/tenant_organisation_address/tenant_organisation_address.module");
const tenant_poc_module_1 = require("./tenantUser/tenant_poc/tenant_poc.module");
const industry_domain_entity_1 = require("./tenantUser/industry_domain/entities/industry_domain.entity");
const industry_domain_module_1 = require("./tenantUser/industry_domain/industry_domain.module");
const tenant_branch_entity_1 = require("./tenantUser/tenant_branch/entities/tenant_branch.entity");
const tenant_branch_module_1 = require("./tenantUser/tenant_branch/tenant_branch.module");
const tenant_country_module_1 = require("./tenantUser/tenant_country/tenant_country.module");
const tenant_state_module_1 = require("./tenantUser/tenant_state/tenant_state.module");
const tenant_state_entity_1 = require("./tenantUser/tenant_state/entities/tenant_state.entity");
const tenant_country_entity_1 = require("./tenantUser/tenant_country/entities/tenant_country.entity");
const tenant_branch_address_entity_1 = require("./tenantUser/tenant_branch_address/entities/tenant_branch_address.entity");
const tenant_branch_address_module_1 = require("./tenantUser/tenant_branch_address/tenant_branch_address.module");
const subscription_entity_1 = require("./tenantUser/subscription/entities/subscription.entity");
const subscription_module_1 = require("./tenantUser/subscription/subscription.module");
const auth_module_1 = require("./auth/auth.module");
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
                        database: "tenantauth",
                        username: "ananth",
                        password: "u7i8o9p0",
                        type: "postgres",
                        host: "localhost",
                        port: 5432,
                        synchronize: true,
                        entities: [
                            role_entity_1.Role,
                            privilege_entity_1.Privilege,
                            module_entity_1.Tmodule,
                            submodule_entity_1.Submodule,
                            rac_map_entity_1.Racmap,
                            subscription_entity_1.Subscription,
                            tuser_entity_1.Tuser,
                            industry_domain_entity_1.IndustryDomain,
                            tenant_organisation_entity_1.TenantOrganisation,
                            tenant_organisation_address_entity_1.TenantOrganisationAddress,
                            tenant_poc_entity_1.TenantPoc,
                            tenant_branch_entity_1.TenantBranch,
                            tenant_state_entity_1.TenantState,
                            tenant_country_entity_1.TenantCountry,
                            tenant_branch_address_entity_1.TenantBranchAddress,
                        ],
                    };
                },
            }),
            privileges_module_1.PrivilegesModule,
            subscription_module_1.SubscriptionModule,
            roles_module_1.RolesModule,
            tusers_module_1.TusersModule,
            modules_module_1.ModulesModule,
            tenant_organisation_module_1.TenantOrganisationModule,
            tenant_organisation_address_module_1.TenantOrganisationAddressModule,
            tenant_poc_module_1.TenantPocModule,
            industry_domain_module_1.IndustryDomainModule,
            tenant_branch_module_1.TenantBranchModule,
            tenant_country_module_1.TenantCountryModule,
            tenant_state_module_1.TenantStateModule,
            tenant_branch_address_module_1.TenantBranchAddressModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map