import { TenantBranchAddress } from 'src/tenantUser/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantOrganisationAddress } from 'src/tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity';
import { TenantState } from 'src/tenantUser/tenant_state/entities/tenant_state.entity';
export declare class TenantCountry {
    id: string;
    name: string;
    states: TenantState;
    tOrganisationAddress: TenantOrganisationAddress;
    tBranch: TenantBranchAddress;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
