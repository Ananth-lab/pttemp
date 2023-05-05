import { CreateTenantPocDto } from './create-tenant_poc.dto';
import { TenantOrganisation } from 'src/tenantUser/tenant_organisation/entities/tenant_organisation.entity';
declare const UpdateTenantPocDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantPocDto>>;
export declare class UpdateTenantPocDto extends UpdateTenantPocDto_base {
    name: string;
    email: string;
    mobile: string;
    phone?: string;
    tenantOrganisation_id: TenantOrganisation;
}
export {};
