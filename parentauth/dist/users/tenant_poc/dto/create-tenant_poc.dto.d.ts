export declare class CreateTenantPocDto {
    profileImage?: string;
    name: string;
    email: string;
    mobile: string;
    phone?: string;
    isAddedInPortal: boolean;
    isEmailVerified?: boolean;
    isMobileVerified?: boolean;
    emailVerifyToken?: string;
    emailVerifyExpires?: Date;
    mobileVerifyToken?: string;
    mobileVerifyExpires?: Date;
    passwordResetToken?: Date;
    passwordResetExpires?: Date;
}
