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
exports.CreateBundleBodyDto = exports.status = void 0;
const class_validator_1 = require("class-validator");
var status;
(function (status) {
    status["ACTIVE"] = "active";
    status["DISABLED"] = "disabled";
})(status = exports.status || (exports.status = {}));
class CreateBundleBodyDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBundleBodyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBundleBodyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(status),
    __metadata("design:type", String)
], CreateBundleBodyDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBundleBodyDto.prototype, "isPaid", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBundleBodyDto.prototype, "submoduleIds", void 0);
exports.CreateBundleBodyDto = CreateBundleBodyDto;
//# sourceMappingURL=create-bundle-body.dto.js.map