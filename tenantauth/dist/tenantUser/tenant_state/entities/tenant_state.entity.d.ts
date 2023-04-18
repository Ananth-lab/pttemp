import { TenantBranchAddress } from 'src/tenantUser/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantCountry } from 'src/tenantUser/tenant_country/entities/tenant_country.entity';
import { TenantOrganisationAddress } from 'src/tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity';
export declare class TenantState {
    id: string;
    name: string;
    countryId: TenantCountry;
    tOrgnisationAddress: TenantOrganisationAddress;
    tBranch: TenantBranchAddress;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
