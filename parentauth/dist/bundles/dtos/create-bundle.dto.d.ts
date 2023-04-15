export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class CreateBundleDto {
    name: string;
    description: string;
    status: status;
    isPaid: boolean;
}
