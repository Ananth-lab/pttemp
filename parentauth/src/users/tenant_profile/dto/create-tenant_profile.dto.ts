import { IsNotEmpty, IsString } from "class-validator";

export class CreateTenantProfileDto {
  @IsNotEmpty()
  @IsString()
  profileImage: string;

  @IsNotEmpty()
  @IsString()
  billingName: string;

  @IsNotEmpty()
  @IsString()
  billingAddress: string;

  @IsNotEmpty()
  @IsString()
  gstin: string;

  // @IsNotEmpty()
  // @IsString()
  // tenantId: string;
}
