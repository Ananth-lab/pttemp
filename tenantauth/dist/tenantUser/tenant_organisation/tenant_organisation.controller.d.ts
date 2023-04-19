import { TenantOrganisationService } from "./tenant_organisation.service";
import { CreateTenantOrganisationDto } from "./dto/create-tenant_organisation.dto";
import { UpdateTenantOrganisationDto } from "./dto/update-tenant_organisation.dto";
export declare class TenantOrganisationController {
    private readonly tenantOrganisationService;
    constructor(tenantOrganisationService: TenantOrganisationService);
    create(createTenantOrganisationDto: CreateTenantOrganisationDto): Promise<CreateTenantOrganisationDto & import("./entities/tenant_organisation.entity").TenantOrganisation>;
    findAll(): Promise<import("./entities/tenant_organisation.entity").TenantOrganisation[]>;
    update(id: string, updateTenantOrganisationDto: UpdateTenantOrganisationDto): Promise<string>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
