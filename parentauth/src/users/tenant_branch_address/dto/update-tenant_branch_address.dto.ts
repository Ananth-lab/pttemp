import { PartialType } from "@nestjs/mapped-types";
import { CreateTenantBranchAddressDto } from "./create-tenant_branch_address.dto";
import { IsString } from "class-validator";

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

  @IsString()
  post_code: string;
}
