import { IsNotEmpty, IsUUID, ValidateIf } from 'class-validator';
import { TenantCountry } from 'src/tenantUser/tenant_country/entities/tenant_country.entity'; 

export class CreateTenantStateDto {
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    @ValidateIf((doc) => doc.countryId)
    @IsUUID()
    countryId: TenantCountry;
  
}
