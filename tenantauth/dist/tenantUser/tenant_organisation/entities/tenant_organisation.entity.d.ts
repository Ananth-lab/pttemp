import { IndustryDomain } from "src/tenantUser/industry_domain/entities/industry_domain.entity";
import { TenantBranch } from "src/tenantUser/tenant_branch/entities/tenant_branch.entity";
import { TenantOrganisationAddress } from "src/tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity";
import { TenantPoc } from "src/tenantUser/tenant_poc/entities/tenant_poc.entity";
import { Tuser } from "src/tenantUser/tusers/tuser.entity";
export declare class TenantOrganisation {
    id: string;
    name: string;
    tradename: string;
    gstin: string;
    pan: string;
    industry_domain: IndustryDomain;
    billingAddress: TenantOrganisationAddress;
    isParent: boolean;
    tParentOrganisationId: TenantOrganisation;
    Branch_id: TenantBranch;
    tUserId: Tuser;
    tenantPoc_id: TenantPoc;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
