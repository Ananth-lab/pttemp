import { Submodule } from './submodule.entity';
import { Racmap } from 'src/roles/rac-map.entity';
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
    modules: Racmap[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
