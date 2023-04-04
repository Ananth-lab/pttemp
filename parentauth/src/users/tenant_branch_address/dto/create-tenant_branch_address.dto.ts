import { IsString, IsUUID } from "class-validator";

export class CreateTenantBranchAddressDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  plot_no: string;

  @IsString()
  city: string;

  //   @IsUUID()
  //   state: string;

  @IsString()
  post_code: string;

  //   @IsUUID()
  //   country: string;

  //   @IsUUID()
  //   branch_id: string;
}
