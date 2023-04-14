export declare enum status {
    PENDING = "pending",
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Puser {
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
    emailVerifyExpires: string;
    mobileVerifyToken: string;
    mobileVerifyExpires: string;
    passwordResetToken: string;
    passwordResetExpires: string;
    otp: string;
    otpExpires: string;
}
