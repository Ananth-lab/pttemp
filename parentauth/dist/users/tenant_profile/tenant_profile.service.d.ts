import { CreateTenantProfileDto } from "./dto/create-tenant_profile.dto";
import { TenantProfile } from "./entities/tenant_profile.entity";
import { Repository } from "typeorm";
import { UpdateTenantProfileDto } from "./dto/update-tenant_profile.dto";
export declare class TenantProfileService {
    private readonly profileRepo;
    constructor(profileRepo: Repository<TenantProfile>);
    create(createTenantProfileDto: CreateTenantProfileDto): Promise<CreateTenantProfileDto & TenantProfile>;
    update(id: string, updateTenantProfileDto: UpdateTenantProfileDto): Promise<TenantProfile>;
}
