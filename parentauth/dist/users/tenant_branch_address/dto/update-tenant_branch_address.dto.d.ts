import { CreateTenantBranchAddressDto } from "./create-tenant_branch_address.dto";
import { TenantState } from "src/users/tenant_state/entities/tenant_state.entity";
import { TenantCountry } from "src/users/tenant_country/entities/tenant_country.entity";
import { TenantBranch } from "src/users/tenant_branch/entities/tenant_branch.entity";
import { TenantBranchAddress } from "../entities/tenant_branch_address.entity";
declare const UpdateTenantBranchAddressDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantBranchAddressDto>>;
export declare class UpdateTenantBranchAddressDto extends UpdateTenantBranchAddressDto_base {
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
export {};
