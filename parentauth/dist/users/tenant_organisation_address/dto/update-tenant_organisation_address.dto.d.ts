import { CreateTenantOrganisationAddressDto } from './create-tenant_organisation_address.dto';
declare const UpdateTenantOrganisationAddressDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantOrganisationAddressDto>>;
export declare class UpdateTenantOrganisationAddressDto extends UpdateTenantOrganisationAddressDto_base {
    name: string;
    address: string;
    plot_no: string;
    city: string;
    state: string;
    post_code: string;
    country: string;
}
export {};
