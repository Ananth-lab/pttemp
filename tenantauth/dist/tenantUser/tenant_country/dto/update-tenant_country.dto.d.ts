import { CreateTenantCountryDto } from './create-tenant_country.dto';
declare const UpdateTenantCountryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantCountryDto>>;
export declare class UpdateTenantCountryDto extends UpdateTenantCountryDto_base {
    name: string;
}
export {};
