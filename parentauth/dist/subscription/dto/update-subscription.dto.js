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
exports.UpdateSubscriptionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_subscription_dto_1 = require("./create-subscription.dto");
const class_validator_1 = require("class-validator");
const tmodule_entity_1 = require("../../tmodules/tmodule.entity");
const tsubmodule_entity_1 = require("../../tmodules/tsubmodule.entity");
class UpdateSubscriptionDto extends (0, mapped_types_1.PartialType)(create_subscription_dto_1.CreateSubscriptionDto) {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tmodule_entity_1.Tmodule)
], UpdateSubscriptionDto.prototype, "moduleId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", tsubmodule_entity_1.Tsubmodule)
], UpdateSubscriptionDto.prototype, "submoduleId", void 0);
exports.UpdateSubscriptionDto = UpdateSubscriptionDto;
//# sourceMappingURL=update-subscription.dto.js.map