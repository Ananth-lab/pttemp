import { Racmap } from 'src/roles/rac-map.entity';
import { Tmodule } from './module.entity';
export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Submodule {
    id: string;
    logo: string;
    name: string;
    description: string;
    status: status;
    tmodule: Tmodule;
    racs: Racmap[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
