import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";
export declare class CreateSubscriptionDto {
    moduleId: Tmodule;
    submoduleId?: Tsubmodule;
    tUserId: string;
}
