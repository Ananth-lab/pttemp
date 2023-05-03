import { CreateSubscriptionDto } from './create-subscription.dto';
import { Tmodule } from 'src/tmodules/tmodule.entity';
import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';
declare const UpdateSubscriptionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSubscriptionDto>>;
export declare class UpdateSubscriptionDto extends UpdateSubscriptionDto_base {
    moduleId: Tmodule;
    submoduleId: Tsubmodule;
}
export {};
