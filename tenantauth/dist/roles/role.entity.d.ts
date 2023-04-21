import { Racmap } from './rac-map.entity';
export declare class Role {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    racs: Racmap[];
}
