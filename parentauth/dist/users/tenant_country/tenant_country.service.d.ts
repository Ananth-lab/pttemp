import { CreateTenantCountryDto } from './dto/create-tenant_country.dto';
import { TenantCountry } from './entities/tenant_country.entity';
import { Repository } from 'typeorm';
export declare class TenantCountryService {
    private readonly countryRepository;
    constructor(countryRepository: Repository<TenantCountry>);
    create(createTenantCountryDto: CreateTenantCountryDto): Promise<CreateTenantCountryDto & TenantCountry>;
}
