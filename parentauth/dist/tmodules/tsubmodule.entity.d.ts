import { Bsmap } from 'src/bundles/bsmap.entity';
import { Tmodule } from './tmodule.entity';
export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Tsubmodule {
    id: string;
    logo: string;
    name: string;
    description: string;
    status: status;
    bsmaps: Bsmap[];
    tmodule: Tmodule;
    subId: Tsubmodule;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
