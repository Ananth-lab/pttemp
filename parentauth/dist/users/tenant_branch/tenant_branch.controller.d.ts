import { TenantBranchService } from "./tenant_branch.service";
import { CreateTenantBranchDto } from "./dto/create-tenant_branch.dto";
import { UpdateTenantBranchDto } from "./dto/update-tenant_branch.dto";
export declare class TenantBranchController {
    private readonly tenantBranchService;
    constructor(tenantBranchService: TenantBranchService);
    create(createTenantBranchDto: CreateTenantBranchDto): Promise<CreateTenantBranchDto & import("./entities/tenant_branch.entity").TenantBranch>;
    update(id: string, updateTenantBranchDto: UpdateTenantBranchDto): Promise<import("./entities/tenant_branch.entity").TenantBranch>;
}
