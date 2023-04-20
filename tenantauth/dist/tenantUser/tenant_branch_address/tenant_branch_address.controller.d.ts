import { TenantBranchAddressService } from "./tenant_branch_address.service";
import { CreateTenantBranchAddressDto } from "./dto/create-tenant_branch_address.dto";
import { UpdateTenantBranchAddressDto } from "./dto/update-tenant_branch_address.dto";
export declare class TenantBranchAddressController {
    private readonly tenantBranchAddressService;
    constructor(tenantBranchAddressService: TenantBranchAddressService);
    create(createTenantBranchAddressDto: CreateTenantBranchAddressDto): Promise<CreateTenantBranchAddressDto & import("./entities/tenant_branch_address.entity").TenantBranchAddress>;
    update(id: string, updateTenantBranchAddressDto: UpdateTenantBranchAddressDto): Promise<import("./entities/tenant_branch_address.entity").TenantBranchAddress>;
}
