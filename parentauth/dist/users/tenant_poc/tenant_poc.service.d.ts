import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';
import { TenantPoc } from './entities/tenant_poc.entity';
import { Repository } from 'typeorm';
export declare class TenantPocService {
    private readonly tenantPocRepo;
    constructor(tenantPocRepo: Repository<TenantPoc>);
    create(createTenantPocDto: CreateTenantPocDto): Promise<CreateTenantPocDto & TenantPoc>;
    update(id: string, updateTenantPocDto: UpdateTenantPocDto): Promise<"data updated" | TenantPoc>;
}
