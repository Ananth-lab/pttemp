import { IndustryDomain } from "src/users/industry_domain/entities/industry_domain.entity";
import { TenantBranch } from "src/users/tenant_branch/entities/tenant_branch.entity";
import { TenantOrganisationAddress } from "src/users/tenant_organisation_address/entities/tenant_organisation_address.entity";
import { Tuser } from "src/users/tuser.entity";
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
    Branch_id: TenantBranch;
    tUserId: Tuser;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
