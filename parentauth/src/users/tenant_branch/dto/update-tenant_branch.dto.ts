import { PartialType } from "@nestjs/mapped-types";
import { CreateTenantBranchDto } from "./create-tenant_branch.dto";

export class UpdateTenantBranchDto extends PartialType(CreateTenantBranchDto) {}
