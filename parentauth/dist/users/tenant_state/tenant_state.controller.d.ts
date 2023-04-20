import { TenantStateService } from './tenant_state.service';
import { CreateTenantStateDto } from './dto/create-tenant_state.dto';
export declare class TenantStateController {
    private readonly tenantStateService;
    constructor(tenantStateService: TenantStateService);
    create(createTenantStateDto: CreateTenantStateDto): Promise<CreateTenantStateDto & import("./entities/tenant_state.entity").TenantState>;
}
