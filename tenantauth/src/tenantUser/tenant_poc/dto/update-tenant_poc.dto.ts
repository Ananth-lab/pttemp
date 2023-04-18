import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantPocDto } from './create-tenant_poc.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from 'class-validator';
import { TenantOrganisation } from 'src/tenantUser/tenant_organisation/entities/tenant_organisation.entity';

export class UpdateTenantPocDto extends PartialType(CreateTenantPocDto) {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsPhoneNumber(null)
    mobile: string;
  
    @IsOptional()
    @IsPhoneNumber(null)
    phone?: string;

    @IsUUID()
    tenantOrganisation_id : TenantOrganisation
}
