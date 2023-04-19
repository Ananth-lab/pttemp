import { TenantOrganisationAddressService } from "./tenant_organisation_address.service";
import { CreateTenantOrganisationAddressDto } from "./dto/create-tenant_organisation_address.dto";
import { UpdateTenantOrganisationAddressDto } from "./dto/update-tenant_organisation_address.dto";
export declare class TenantOrganisationAddressController {
    private readonly tenantOrganisationAddressService;
    constructor(tenantOrganisationAddressService: TenantOrganisationAddressService);
    create(createTenantOrganisationAddressDto: CreateTenantOrganisationAddressDto): Promise<CreateTenantOrganisationAddressDto & import("./entities/tenant_organisation_address.entity").TenantOrganisationAddress>;
    update(id: string, updateTenantOrganisationAddressDto: UpdateTenantOrganisationAddressDto): Promise<string>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
