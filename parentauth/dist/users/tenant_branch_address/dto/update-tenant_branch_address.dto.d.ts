import { CreateTenantBranchAddressDto } from "./create-tenant_branch_address.dto";
declare const UpdateTenantBranchAddressDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantBranchAddressDto>>;
export declare class UpdateTenantBranchAddressDto extends UpdateTenantBranchAddressDto_base {
    name: string;
    address: string;
    plot_no: string;
    city: string;
    post_code: string;
}
export {};
