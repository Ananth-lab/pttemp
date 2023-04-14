import { IsBoolean, IsNotEmpty, IsString, IsUUID, ValidateIf } from "class-validator";
import { TenantBranch } from "src/users/tenant_branch/entities/tenant_branch.entity";
import { TenantCountry } from "src/users/tenant_country/entities/tenant_country.entity";
import { TenantState } from "src/users/tenant_state/entities/tenant_state.entity";
import { TenantBranchAddress } from "../entities/tenant_branch_address.entity";

export class CreateTenantBranchAddressDto {
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
  // @IsNotEmpty()
  // @ValidateIf(doc=>doc.state)
  @IsUUID()
  state: TenantState;

  @IsString()
  post_code: string;

  // @IsNotEmpty()
  // @ValidateIf(doc=>doc.country)
  @IsUUID()
  country:TenantCountry;

  // @IsNotEmpty()
  // @ValidateIf(doc=>doc.branch_id)
  @IsUUID()
  branch_id: TenantBranch;

  @IsBoolean()
  isParent:Boolean

 @ValidateIf(doc=>doc.tenantBranchAddress)
  @IsUUID()
  tenantBranhAddress:TenantBranchAddress
}
