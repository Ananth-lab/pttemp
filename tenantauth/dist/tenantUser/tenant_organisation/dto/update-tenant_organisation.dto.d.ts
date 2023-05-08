import { CreateTenantOrganisationDto } from './create-tenant_organisation.dto';
import { TenantOrganisation } from '../entities/tenant_organisation.entity';
import { IndustryDomain } from 'src/tenantUser/industry_domain/entities/industry_domain.entity';
import { Tuser } from 'src/tenantUser/tusers/tuser.entity';
declare const UpdateTenantOrganisationDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantOrganisationDto>>;
export declare class UpdateTenantOrganisationDto extends UpdateTenantOrganisationDto_base {
    name: string;
    tradename: string;
    gstin: string;
    pan: string;
    industry_domain: IndustryDomain;
    isParent: boolean;
    tParentOrganisationId: TenantOrganisation;
    tUserId: Tuser;
}
export {};
