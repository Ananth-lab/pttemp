import { CreateTenantOrganisationAddressDto } from "./dto/create-tenant_organisation_address.dto";
import { UpdateTenantOrganisationAddressDto } from "./dto/update-tenant_organisation_address.dto";
import { TenantOrganisationAddress } from "./entities/tenant_organisation_address.entity";
import { Repository } from "typeorm";
export declare class TenantOrganisationAddressService {
    private readonly repoOrAd;
    constructor(repoOrAd: Repository<TenantOrganisationAddress>);
    create(createTenantOrganisationAddressDto: CreateTenantOrganisationAddressDto): Promise<CreateTenantOrganisationAddressDto & TenantOrganisationAddress>;
    update(id: string, updateTenantOrganisationAddressDto: UpdateTenantOrganisationAddressDto): Promise<TenantOrganisationAddress>;
    findOne(id: string): Promise<TenantOrganisationAddress>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
