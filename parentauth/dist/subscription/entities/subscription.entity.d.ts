import { Tuser } from 'src/users/tuser.entity';
export declare class Subscription {
    id: string;
    moduleId: string;
    submoduleId: string;
    tUser: Tuser;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
