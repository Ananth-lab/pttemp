import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";
import { Tuser } from "src/users/tuser.entity";
export declare class Subscription {
    id: string;
    moduleId: Tmodule;
    subModuleId: Tsubmodule;
    tUser: Tuser;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
