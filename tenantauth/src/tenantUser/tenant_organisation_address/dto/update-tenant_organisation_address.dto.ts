import { PartialType } from "@nestjs/mapped-types";
import { CreateTenantOrganisationAddressDto } from "./create-tenant_organisation_address.dto";
import {
  IsBoolean,
  IsString,
  IsUUID,
  ValidateIf,
} from "class-validator";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantOrganisation } from "src/tenantUser/tenant_organisation/entities/tenant_organisation.entity";
import { TenantOrganisationAddress } from "../entities/tenant_organisation_address.entity";

export class UpdateTenantOrganisationAddressDto extends PartialType(
  CreateTenantOrganisationAddressDto
) {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  plot_no: string;

  @IsString()
  city: string;

  @ValidateIf((doc) => doc.state)
  @IsUUID()
  state: TenantState;

  @IsString()
  post_code: string;

  @ValidateIf((doc) => doc.country)
  @IsUUID()
  country: TenantCountry;

  @ValidateIf((doc) => doc.tenantOrganisationId)
  @IsUUID()
  tenantOrganisationId: TenantOrganisation;

  @IsBoolean()
  isParent: Boolean;

  @ValidateIf(doc=>doc.parentOaddress)
  @IsUUID()
  parentOaddress:TenantOrganisationAddress
}
