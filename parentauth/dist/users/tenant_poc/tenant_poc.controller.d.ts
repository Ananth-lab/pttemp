import { TenantPocService } from './tenant_poc.service';
import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';
export declare class TenantPocController {
    private readonly tenantPocService;
    constructor(tenantPocService: TenantPocService);
    create(createTenantPocDto: CreateTenantPocDto): Promise<CreateTenantPocDto & import("./entities/tenant_poc.entity").TenantPoc>;
    update(id: string, updateTenantPocDto: UpdateTenantPocDto): Promise<string>;
}
