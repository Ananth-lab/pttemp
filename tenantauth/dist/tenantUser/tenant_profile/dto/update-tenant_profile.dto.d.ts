import { CreateTenantProfileDto } from "./create-tenant_profile.dto";
declare const UpdateTenantProfileDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTenantProfileDto>>;
export declare class UpdateTenantProfileDto extends UpdateTenantProfileDto_base {
    profileImage: string;
    billingName: string;
    billingAddress: string;
    gstin: string;
}
export {};
