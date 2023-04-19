import { CreateTenantOrganisationAddressDto } from "./create-tenant_organisation_address.dto";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantOrganisation } from "src/tenantUser/tenant_organisation/entities/tenant_organisation.entity";
import { TenantOrganisationAddress } from "../entities/tenant_organisation_address.entity";
declare const UpdateTenantOrganisationAddressDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantOrganisationAddressDto>>;
export declare class UpdateTenantOrganisationAddressDto extends UpdateTenantOrganisationAddressDto_base {
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
export {};
