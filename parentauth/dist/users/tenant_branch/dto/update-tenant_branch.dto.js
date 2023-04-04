"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenantBranchDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tenant_branch_dto_1 = require("./create-tenant_branch.dto");
class UpdateTenantBranchDto extends (0, mapped_types_1.PartialType)(create_tenant_branch_dto_1.CreateTenantBranchDto) {
}
exports.UpdateTenantBranchDto = UpdateTenantBranchDto;
//# sourceMappingURL=update-tenant_branch.dto.js.map