import { Tuser } from "src/users/tuser.entity";
export declare class Subscription {
    id: string;
    module: string[];
    subModule: string[];
    tUser: Tuser;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
