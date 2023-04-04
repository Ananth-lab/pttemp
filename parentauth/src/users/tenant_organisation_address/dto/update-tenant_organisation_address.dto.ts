import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantOrganisationAddressDto } from './create-tenant_organisation_address.dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTenantOrganisationAddressDto extends PartialType(CreateTenantOrganisationAddressDto) {


    
    @IsString()
    name: string;
  
    
    @IsString()
    address: string;
  
    
    @IsString()
    plot_no: string;
  
    
    @IsString()
    city: string;
  
    
    @IsUUID()
    state: string;
  
    
    @IsString()
    post_code: string;
  
    
    @IsUUID()
    country: string;
}
