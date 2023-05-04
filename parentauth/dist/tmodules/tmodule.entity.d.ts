export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Tmodule {
    id: string;
    logo: string;
    name: string;
    description: string;
    status: status;
    submodules: any;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
