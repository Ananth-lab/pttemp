import { Submodule } from './submodule.entity';
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
    submodules: Submodule[];
}
