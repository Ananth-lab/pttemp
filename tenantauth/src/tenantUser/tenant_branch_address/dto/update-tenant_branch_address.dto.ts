import { PartialType } from "@nestjs/mapped-types";
import { CreateTenantBranchAddressDto } from "./create-tenant_branch_address.dto";
import { IsBoolean, IsString, IsUUID } from "class-validator";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantBranch } from "src/tenantUser/tenant_branch/entities/tenant_branch.entity";
import { TenantBranchAddress } from "../entities/tenant_branch_address.entity";

export class UpdateTenantBranchAddressDto extends PartialType(
  CreateTenantBranchAddressDto
) {
  @IsString()
  name: string;

  
  @IsString()
  address: string;

  
  @IsString()
  plot_no: string;

  @IsString()
  city: string;

  @IsUUID()
  state: TenantState;

  @IsString()
  post_code: string;

  
  @IsUUID()
  country:TenantCountry;

  // 
  // @ValidateIf(doc=>doc.branch_id)
  @IsUUID()
  branch_id: TenantBranch;

  @IsBoolean()
  isParent:Boolean

 
  @IsUUID()
  tenantBranhAddress:TenantBranchAddress
}
