import { CreateTenantOrganisationAddressDto } from "./create-tenant_organisation_address.dto";
import { TenantState } from "src/users/tenant_state/entities/tenant_state.entity";
import { TenantCountry } from "src/users/tenant_country/entities/tenant_country.entity";
import { TenantOrganisation } from "src/users/tenant_organisation/entities/tenant_organisation.entity";
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
}
export {};
