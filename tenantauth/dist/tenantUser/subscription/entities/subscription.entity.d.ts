import { Tuser } from 'src/tenantUser/tusers/tuser.entity';
export declare class Subscription {
    id: string;
    moduleId: string;
    submoduleId: string;
    tUser: Tuser;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
