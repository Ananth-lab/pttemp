import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf, ValidateNested } from 'class-validator';
import { TenantOrganisation } from '../entities/tenant_organisation.entity';
import { IndustryDomain } from 'src/tenantUser/industry_domain/entities/industry_domain.entity';
import { Tuser } from 'src/tenantUser/tusers/tuser.entity';

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

 @IsNotEmpty()
 @ValidateIf(doc=>doc.industry_domain)
 @IsUUID()
 industry_domain: IndustryDomain;

  @IsOptional()
  @IsBoolean()
  isParent: boolean;

  
  @ValidateIf((doc) => doc.tParentOrganisationId)
  @IsUUID()
  tParentOrganisationId: TenantOrganisation;

  @IsNotEmpty()
  @IsUUID()
  tUserId:Tuser
}