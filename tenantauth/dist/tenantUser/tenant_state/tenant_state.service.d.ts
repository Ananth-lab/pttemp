import { CreateTenantStateDto } from './dto/create-tenant_state.dto';
import { TenantState } from './entities/tenant_state.entity';
import { Repository } from 'typeorm';
export declare class TenantStateService {
    private readonly statRep;
    constructor(statRep: Repository<TenantState>);
    consumeMessages(): Promise<void>;
    create(createTenantStateDto: CreateTenantStateDto): Promise<CreateTenantStateDto & TenantState>;
}
