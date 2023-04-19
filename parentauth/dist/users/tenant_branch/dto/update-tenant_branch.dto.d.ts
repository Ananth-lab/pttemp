import { CreateTenantBranchDto } from "./create-tenant_branch.dto";
import { TenantOrganisation } from "src/users/tenant_organisation/entities/tenant_organisation.entity";
import { TenantBranch } from "../entities/tenant_branch.entity";
declare const UpdateTenantBranchDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantBranchDto>>;
export declare class UpdateTenantBranchDto extends UpdateTenantBranchDto_base {
    organisation_id: TenantOrganisation;
    name: string;
    gstin: string;
    isParent: boolean;
    parentbranch: TenantBranch;
}
export {};
