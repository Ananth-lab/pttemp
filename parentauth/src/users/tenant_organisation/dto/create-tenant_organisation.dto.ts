import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTenantOrganisationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  tradename: string;

  @IsNotEmpty()
  @IsString()
  gstin: string;

  @IsNotEmpty()
  @IsString()
  pan: string;

 // @IsNotEmpty()
  industry_domain: string;

  @IsOptional()
  @IsBoolean()
  isParent: boolean;

  @IsOptional()
  parentOrganisationId: string;

  billing_address:string;
//   @IsNotEmpty()
//   @ValidateNested()
//   @Type(() => CreateTenantOrganisationAddressDto)
//   billing_address: CreateTenantOrganisationAddressDto;
}