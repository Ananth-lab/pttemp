import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateIf,
} from "class-validator";
import { TenantOrganisation } from "src/users/tenant_organisation/entities/tenant_organisation.entity";
import { TenantBranch } from "../entities/tenant_branch.entity";

export class CreateTenantBranchDto {
  @IsNotEmpty()
  @IsUUID()
  organisation_id: TenantOrganisation;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  gstin: string;

  @IsBoolean()
  isParent: boolean;

  @IsNotEmpty()
  @IsUUID()
  parentbranch: TenantBranch;
}
