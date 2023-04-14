import { TenantBranch } from "src/users/tenant_branch/entities/tenant_branch.entity";
import { TenantCountry } from "src/users/tenant_country/entities/tenant_country.entity";
import { TenantState } from "src/users/tenant_state/entities/tenant_state.entity";
export declare class TenantBranchAddress {
    id: string;
    name: string;
    address: string;
    plot_no: string;
    city: string;
    state: TenantState;
    post_code: string;
    country: TenantCountry;
    isParent: Boolean;
    tenantBranhAddress: TenantBranchAddress;
    tenantBranchId: TenantBranch;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
