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
const tusers_module_1 = require("./tusers/tusers.module");
const modules_module_1 = require("./modules/modules.module");
const role_entity_1 = require("./roles/role.entity");
const privilege_entity_1 = require("./privileges/privilege.entity");
const module_entity_1 = require("./modules/module.entity");
const submodule_entity_1 = require("./modules/submodule.entity");
const rac_map_entity_1 = require("./roles/rac-map.entity");
const tuser_entity_1 = require("./tusers/tuser.entity");
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
                        database: 'tenantauth',
                        username: 'ananth',
                        password: 'u7i8o9p0',
                        type: 'postgres',
                        host: 'localhost',
                        port: 5432,
                        synchronize: true,
                        entities: [role_entity_1.Role, privilege_entity_1.Privilege, module_entity_1.Tmodule, submodule_entity_1.Submodule, rac_map_entity_1.Racmap, tuser_entity_1.Tuser],
                    };
                },
            }),
            privileges_module_1.PrivilegesModule,
            roles_module_1.RolesModule,
            tusers_module_1.TusersModule,
            modules_module_1.ModulesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map