import { TenantCountryService } from "./tenant_country.service";
import { CreateTenantCountryDto } from "./dto/create-tenant_country.dto";
export declare class TenantCountryController {
    private readonly tenantCountryService;
    constructor(tenantCountryService: TenantCountryService);
    create(createTenantCountryDto: CreateTenantCountryDto): Promise<CreateTenantCountryDto & import("./entities/tenant_country.entity").TenantCountry>;
}
