import { TenantOrganisationAddressService } from "../tenant_organisation_address/tenant_organisation_address.service";
import { TenantPocService } from "../tenant_poc/tenant_poc.service";
import { SubscriptionService } from "src/subscription/subscription.service";
import { TmodulesService } from "src/tmodules/tmodules.service";
import { TsubmodulesService } from "src/tmodules/tsubmodules.service";
export declare class PreviewController {
    private readonly tenantAddress;
    private readonly tenantPoc;
    private readonly tenantSubscription;
    private readonly tenantModule;
    private readonly tenantSubModule;
    constructor(tenantAddress: TenantOrganisationAddressService, tenantPoc: TenantPocService, tenantSubscription: SubscriptionService, tenantModule: TmodulesService, tenantSubModule: TsubmodulesService);
    findOne(id: string): Promise<import("../tenant_organisation_address/entities/tenant_organisation_address.entity").TenantOrganisationAddress>;
    finalSubmit(data: any): Promise<any>;
}
