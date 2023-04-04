import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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
  @IsUUID()
  state: string;

  @IsNotEmpty()
  @IsString()
  post_code: string;

  @IsNotEmpty()
  @IsUUID()
  country: string;
}