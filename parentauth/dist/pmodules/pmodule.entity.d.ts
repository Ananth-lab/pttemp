import { Psubmodule } from './psubmodule.entity';
export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Pmodule {
    id: string;
    logo: string;
    name: string;
    description: string;
    status: status;
    submodules: Psubmodule[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
