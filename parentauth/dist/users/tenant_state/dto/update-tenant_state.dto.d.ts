import { CreateTenantStateDto } from './create-tenant_state.dto';
import { TenantCountry } from 'src/users/tenant_country/entities/tenant_country.entity';
declare const UpdateTenantStateDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantStateDto>>;
export declare class UpdateTenantStateDto extends UpdateTenantStateDto_base {
    name: string;
    countryId: TenantCountry;
}
export {};
