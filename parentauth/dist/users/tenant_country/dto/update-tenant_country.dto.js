"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenantCountryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tenant_country_dto_1 = require("./create-tenant_country.dto");
class UpdateTenantCountryDto extends (0, mapped_types_1.PartialType)(create_tenant_country_dto_1.CreateTenantCountryDto) {
}
exports.UpdateTenantCountryDto = UpdateTenantCountryDto;
//# sourceMappingURL=update-tenant_country.dto.js.map