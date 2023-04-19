import { CreateTenantOrganisationDto } from "./dto/create-tenant_organisation.dto";
import { UpdateTenantOrganisationDto } from "./dto/update-tenant_organisation.dto";
import { TenantOrganisation } from "./entities/tenant_organisation.entity";
import { Repository } from "typeorm";
export declare class TenantOrganisationService {
    private readonly OrgRepo;
    constructor(OrgRepo: Repository<TenantOrganisation>);
    create(createTenantOrganisationDto: CreateTenantOrganisationDto): Promise<CreateTenantOrganisationDto & TenantOrganisation>;
    findAll(): Promise<TenantOrganisation[]>;
    findOne(id: string): Promise<TenantOrganisation>;
    update(id: string, updateTenantOrganisationDto: UpdateTenantOrganisationDto): Promise<TenantOrganisation>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
