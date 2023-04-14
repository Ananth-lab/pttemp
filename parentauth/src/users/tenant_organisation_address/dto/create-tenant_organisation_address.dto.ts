import { IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf } from 'class-validator';
import { TenantCountry } from 'src/users/tenant_country/entities/tenant_country.entity';
import { TenantOrganisation } from 'src/users/tenant_organisation/entities/tenant_organisation.entity';
import { TenantState } from 'src/users/tenant_state/entities/tenant_state.entity';

export class CreateTenantOrganisationAddressDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  plot_no: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @ValidateIf((doc) => doc.state)
  @IsUUID()
  state: TenantState;

  @IsNotEmpty()
  @IsString()
  post_code: string;

  @IsNotEmpty()
  @ValidateIf((doc) => doc.country)
  @IsUUID()
  country: TenantCountry;

  @IsNotEmpty()
  @ValidateIf((doc) => doc.tenantOrganisationId)
  @IsUUID()
  tenantOrganisationId:TenantOrganisation
}