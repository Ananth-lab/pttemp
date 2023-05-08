"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const subscription_controller_1 = require("./subscription.controller");
const typeorm_1 = require("@nestjs/typeorm");
const subscription_entity_1 = require("./entities/subscription.entity");
const privilege_entity_1 = require("../../privileges/privilege.entity");
const privileges_service_1 = require("../../privileges/privileges.service");
const role_entity_1 = require("../../roles/role.entity");
const roles_service_1 = require("../../roles/roles.service");
const roles_controller_1 = require("../../roles/roles.controller");
const rac_maps_service_1 = require("../../roles/rac-maps.service");
const rac_map_entity_1 = require("../../roles/rac-map.entity");
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([subscription_entity_1.Subscription, privilege_entity_1.Privilege, role_entity_1.Role, rac_map_entity_1.Racmap])],
        controllers: [subscription_controller_1.SubscriptionController, roles_controller_1.RolesController],
        providers: [subscription_service_1.SubscriptionService, privileges_service_1.PrivilegesService, roles_service_1.RolesService, rac_maps_service_1.RacmapsService]
    })
], SubscriptionModule);
exports.SubscriptionModule = SubscriptionModule;
//# sourceMappingURL=subscription.module.js.map