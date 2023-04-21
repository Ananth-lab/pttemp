import { TenantOrganisationAddressService } from "../tenant_organisation_address/tenant_organisation_address.service";
import { TenantPocService } from "../tenant_poc/tenant_poc.service";
export declare class PreviewController {
    private readonly tenantAddress;
    private readonly tenantPoc;
    constructor(tenantAddress: TenantOrganisationAddressService, tenantPoc: TenantPocService);
    findOne(id: string): Promise<import("../tenant_organisation_address/entities/tenant_organisation_address.entity").TenantOrganisationAddress>;
    catch(error: any): void;
    finalSubmit(data: any): Promise<any>;
}
