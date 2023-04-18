import { TenantOrganisation } from 'src/tenantUser/tenant_organisation/entities/tenant_organisation.entity';
export declare class TenantPoc {
    id: string;
    profileImage: string;
    name: string;
    email: string;
    mobile: string;
    phone: string;
    isAddedInPortal: boolean;
    isEmailVerified: boolean;
    isMobileVerified: boolean;
    emailVerifyToken: string;
    emailVerifyExpires: Date;
    mobileVerifyToken: string;
    mobileVerifyExpires: Date;
    passwordResetToken: Date;
    passwordResetExpires: Date;
    tenantOrganisation_id: TenantOrganisation;
}
