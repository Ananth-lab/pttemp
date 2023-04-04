import { TenantProfileService } from "./tenant_profile.service";
import { CreateTenantProfileDto } from "./dto/create-tenant_profile.dto";
import { UpdateTenantProfileDto } from "./dto/update-tenant_profile.dto";
export declare class TenantProfileController {
    private readonly tenantProfileService;
    constructor(tenantProfileService: TenantProfileService);
    create(createTenantProfileDto: CreateTenantProfileDto): Promise<CreateTenantProfileDto & import("./entities/tenant_profile.entity").TenantProfile>;
    update(id: string, updateTenantProfileDto: UpdateTenantProfileDto): Promise<string>;
}
