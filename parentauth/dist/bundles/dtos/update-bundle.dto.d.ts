export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class UpdateBundleDto {
    name: string;
    description: string;
    status: status;
    isPaid: boolean;
}
