import { PartialType } from "@nestjs/mapped-types";
import { CreateTenantProfileDto } from "./create-tenant_profile.dto";
import { IsString } from "class-validator";

export class UpdateTenantProfileDto extends PartialType(
  CreateTenantProfileDto
) {
  @IsString()
  profileImage: string;

  @IsString()
  billingName: string;

  @IsString()
  billingAddress: string;

  @IsString()
  gstin: string;
}
