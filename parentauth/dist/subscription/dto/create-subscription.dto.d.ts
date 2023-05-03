import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";
export declare class CreateSubscriptionDto {
    module: Tmodule;
    submodule?: Tsubmodule;
    tUserId: string;
}
