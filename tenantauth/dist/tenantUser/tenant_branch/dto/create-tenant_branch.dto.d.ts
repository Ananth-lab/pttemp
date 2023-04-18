import { TenantOrganisation } from "src/tenantUser/tenant_organisation/entities/tenant_organisation.entity";
import { TenantBranch } from "../entities/tenant_branch.entity";
export declare class CreateTenantBranchDto {
    organisation_id: TenantOrganisation;
    name: string;
    gstin: string;
    isParent: boolean;
    parentbranch: TenantBranch;
}
