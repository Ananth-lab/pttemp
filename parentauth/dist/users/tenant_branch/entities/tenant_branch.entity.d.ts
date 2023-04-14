import { TenantBranchAddress } from 'src/users/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantOrganisation } from 'src/users/tenant_organisation/entities/tenant_organisation.entity';
export declare class TenantBranch {
    id: string;
    organisation_id: TenantOrganisation;
    name: string;
    gstin: string;
    isParent: boolean;
    parentbranchId: TenantBranch;
    TenantBranchAddressId: TenantBranchAddress;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
