import { TenantOrganisation } from 'src/users/tenant_organisation/entities/tenant_organisation.entity';
export declare class IndustryDomain {
    id: string;
    name: string;
    tenantOrganisations: TenantOrganisation;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
