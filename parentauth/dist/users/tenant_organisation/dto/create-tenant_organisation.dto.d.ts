import { TenantOrganisation } from '../entities/tenant_organisation.entity';
import { IndustryDomain } from 'src/users/industry_domain/entities/industry_domain.entity';
import { Tuser } from 'src/users/tuser.entity';
export declare class CreateTenantOrganisationDto {
    name: string;
    tradename: string;
    gstin: string;
    pan: string;
    industry_domain: IndustryDomain;
    isParent: boolean;
    tParentOrganisationId: TenantOrganisation;
    tUserId: Tuser;
}
