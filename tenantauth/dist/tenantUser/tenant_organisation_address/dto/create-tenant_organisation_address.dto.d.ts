import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantOrganisation } from "src/tenantUser/tenant_organisation/entities/tenant_organisation.entity";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import { TenantOrganisationAddress } from "../entities/tenant_organisation_address.entity";
export declare class CreateTenantOrganisationAddressDto {
    name: string;
    address: string;
    plot_no: string;
    city: string;
    state: TenantState;
    post_code: string;
    country: TenantCountry;
    tenantOrganisationId: TenantOrganisation;
    isParent: Boolean;
    parentOaddress: TenantOrganisationAddress;
}
