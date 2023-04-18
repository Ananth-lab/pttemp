import { PartialType } from '@nestjs/mapped-types';
import { CreateTenantOrganisationDto } from './create-tenant_organisation.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf, ValidateNested } from 'class-validator';
import { TenantOrganisation } from '../entities/tenant_organisation.entity';
import { IndustryDomain } from 'src/tenantUser/industry_domain/entities/industry_domain.entity';
import { Tuser } from 'src/tenantUser/tusers/tuser.entity';
export class UpdateTenantOrganisationDto extends PartialType(CreateTenantOrganisationDto) {

    @IsString()
    name: string;

    @IsString()
    tradename: string;

    @IsString()
    gstin: string;

    @IsString()
    pan: string;
  

    @ValidateIf(doc=>doc.industry_domain)
    @IsUUID()
    industry_domain: IndustryDomain;
  
   
    @IsBoolean()
    isParent: boolean;
  
   
    @ValidateIf((doc) => doc.tParentOrganisationId)
    @IsUUID()
    
    tParentOrganisationId: TenantOrganisation;
    @IsUUID()
    tUserId:Tuser
}