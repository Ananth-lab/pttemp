import { IsBoolean, IsString, IsUUID } from "class-validator";

export class CreateTenantBranchDto {
  // @IsString()
  // organisation_id: string;

  @IsString()
  name: string;

  @IsString()
  gstin: string;

  @IsBoolean()
  isparent: boolean;

  // @IsString()
  // parentbranch: string;
}
