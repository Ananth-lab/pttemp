import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantOrganisationDto } from './create-tenant_organisation.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
export class UpdateTenantOrganisationDto extends PartialType(CreateTenantOrganisationDto) {

    @IsString()
   
    name: string;

    @IsString()
   
    tradename: string;

    @IsString()
   
    gstin: string;

    @IsString()
   
    pan: string;
  

    industry_domain: string;
  
   
    @IsBoolean()
    isParent: boolean;
  
   
    parentOrganisationId: string;

    billing_address:string;
}
