import { Bsmap } from './bsmap.entity';
export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class Bundle {
    id: string;
    name: string;
    description: string;
    status: status;
    isPaid: boolean;
    createdBy: string;
    bsmaps: Bsmap[];
}
