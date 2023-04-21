import { Racmap } from 'src/roles/rac-map.entity';
import { Pmodule } from './pmodule.entity';
export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Psubmodule {
    id: string;
    logo: string;
    name: string;
    description: string;
    status: status;
    pmodule: Pmodule;
    racs: Racmap[];
}
