import { CreateTenantBranchAddressDto } from "./dto/create-tenant_branch_address.dto";
import { UpdateTenantBranchAddressDto } from "./dto/update-tenant_branch_address.dto";
import { TenantBranchAddress } from "./entities/tenant_branch_address.entity";
import { Repository } from "typeorm";
export declare class TenantBranchAddressService {
    private readonly tenantBranchRepo;
    constructor(tenantBranchRepo: Repository<TenantBranchAddress>);
    create(createTenantBranchAddressDto: CreateTenantBranchAddressDto): Promise<CreateTenantBranchAddressDto & TenantBranchAddress>;
    findOne(id: string): Promise<TenantBranchAddress>;
    update(id: string, updateTenantBranchAddressDto: UpdateTenantBranchAddressDto): Promise<TenantBranchAddress>;
}
