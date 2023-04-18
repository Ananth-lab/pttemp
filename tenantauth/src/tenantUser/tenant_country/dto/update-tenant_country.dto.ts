import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantCountryDto } from './create-tenant_country.dto';

export class UpdateTenantCountryDto extends PartialType(CreateTenantCountryDto) {
    name:string
}
