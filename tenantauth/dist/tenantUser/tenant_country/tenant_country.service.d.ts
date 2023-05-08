import { CreateTenantCountryDto } from './dto/create-tenant_country.dto';
import { UpdateTenantCountryDto } from './dto/update-tenant_country.dto';
import { TenantCountry } from './entities/tenant_country.entity';
import { Repository } from 'typeorm';
export declare class TenantCountryService {
    private readonly countryRepository;
    constructor(countryRepository: Repository<TenantCountry>);
    consumeMessages(): Promise<void>;
    create(createTenantCountryDto: CreateTenantCountryDto): Promise<CreateTenantCountryDto & TenantCountry>;
    update(id: string, updateTenantCountryDto: UpdateTenantCountryDto): Promise<TenantCountry>;
}
