import { TenantOrganisationAddressService } from "../tenant_organisation_address/tenant_organisation_address.service";
import { TenantPocService } from "../tenant_poc/tenant_poc.service";
import { SubscriptionService } from "src/subscription/subscription.service";
export declare class PreviewController {
    private readonly tenantAddress;
    private readonly tenantPoc;
    private readonly tenantSubscription;
    constructor(tenantAddress: TenantOrganisationAddressService, tenantPoc: TenantPocService, tenantSubscription: SubscriptionService);
    findOne(id: string): Promise<import("../tenant_organisation_address/entities/tenant_organisation_address.entity").TenantOrganisationAddress>;
    finalSubmit(data: any): Promise<any>;
}
