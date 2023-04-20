import { TenantOrganisationAddressService } from "../tenant_organisation_address/tenant_organisation_address.service";
export declare class PreviewController {
    private readonly tenantAddress;
    constructor(tenantAddress: TenantOrganisationAddressService);
    findOne(id: string): Promise<import("../tenant_organisation_address/entities/tenant_organisation_address.entity").TenantOrganisationAddress>;
    catch(error: any): void;
    finalSubmit(data: any): Promise<any>;
}
