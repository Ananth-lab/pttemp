import { CreateTenantBranchDto } from "./dto/create-tenant_branch.dto";
import { UpdateTenantBranchDto } from "./dto/update-tenant_branch.dto";
import { TenantBranch } from "./entities/tenant_branch.entity";
import { Repository } from "typeorm";
export declare class TenantBranchService {
    private readonly branchRep;
    constructor(branchRep: Repository<TenantBranch>);
    create(createTenantBranchDto: CreateTenantBranchDto): Promise<CreateTenantBranchDto & TenantBranch>;
    findOne(id: string): Promise<TenantBranch>;
    update(id: string, updateTenantBranchDto: UpdateTenantBranchDto): Promise<TenantBranch>;
}
