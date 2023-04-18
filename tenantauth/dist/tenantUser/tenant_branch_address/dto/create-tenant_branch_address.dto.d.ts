import { TenantBranch } from "src/tenantUser/tenant_branch/entities/tenant_branch.entity";
import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import { TenantBranchAddress } from "../entities/tenant_branch_address.entity";
export declare class CreateTenantBranchAddressDto {
    name: string;
    address: string;
    plot_no: string;
    city: string;
    state: TenantState;
    post_code: string;
    country: TenantCountry;
    branch_id: TenantBranch;
    isParent: Boolean;
    tenantBranhAddress: TenantBranchAddress;
}
