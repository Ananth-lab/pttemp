import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantStateDto } from './create-tenant_state.dto';
import { IsNotEmpty, IsUUID, ValidateIf } from 'class-validator';
import { TenantCountry } from 'src/tenantUser/tenant_country/entities/tenant_country.entity';

export class UpdateTenantStateDto extends PartialType(CreateTenantStateDto) {
    name: string;
  
  
    @ValidateIf((doc) => doc.countryId)
    @IsUUID()
    countryId: TenantCountry;
}
