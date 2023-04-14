import { Tsubmodule } from './tsubmodule.entity';
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
    submodules: Tsubmodule[];
}
