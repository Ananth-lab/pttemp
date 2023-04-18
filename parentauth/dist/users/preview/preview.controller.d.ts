import { IndustryDomainService } from '../industry_domain/industry_domain.service';
import { TenantOrganisationService } from '../tenant_organisation/tenant_organisation.service';
export declare class PreviewController {
    private readonly domain;
    private readonly organisation;
    constructor(domain: IndustryDomainService, organisation: TenantOrganisationService);
    getPreviewData(): Promise<{
        tenanIndustryDomain: import("../industry_domain/entities/industry_domain.entity").IndustryDomain;
        tenantOrganisation: import("../tenant_organisation/entities/tenant_organisation.entity").TenantOrganisation;
    }>;
    finalSubmit(): Promise<void>;
}
