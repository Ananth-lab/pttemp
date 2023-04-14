import { IndustryDomain } from 'src/users/industry_domain/entities/industry_domain.entity';
import { TenantOrganisationAddress } from 'src/users/tenant_organisation_address/entities/tenant_organisation_address.entity';
export declare class TenantOrganisation {
    id: string;
    name: string;
    tradename: string;
    gstin: string;
    pan: string;
    tenantOrganisations: TenantOrganisation;
    industry_domain: IndustryDomain;
    billingAddress: TenantOrganisationAddress;
    isParent: Boolean;
    tParentOrganisationId: TenantOrganisation;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
