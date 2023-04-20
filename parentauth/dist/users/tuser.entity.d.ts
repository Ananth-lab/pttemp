import { TenantOrganisation } from './tenant_organisation/entities/tenant_organisation.entity';
export declare enum status {
    PENDING = "pending",
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Tuser {
    id: string;
    profileImage: string;
    name: string;
    email: string;
    isEmailVerified: boolean;
    mobile: string;
    isMobileVerified: boolean;
    password: string;
    status: status;
    model: string;
    emailVerifyToken: string;
    orgId: TenantOrganisation;
    emailVerifyExpires: string;
    mobileVerifyToken: string;
    mobileVerifyExpires: string;
    passwordResetToken: string;
    passwordResetExpires: string;
    otp: string;
    otpExpires: string;
}
