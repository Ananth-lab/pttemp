import { CreateTenantOrganisationDto } from './create-tenant_organisation.dto';
declare const UpdateTenantOrganisationDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantOrganisationDto>>;
export declare class UpdateTenantOrganisationDto extends UpdateTenantOrganisationDto_base {
    name: string;
    tradename: string;
    gstin: string;
    pan: string;
    industry_domain: string;
    isParent: boolean;
    parentOrganisationId: string;
    billing_address: string;
}
export {};
