import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';
export declare enum status {
    ACTIVE = "active",
    DISABLED = "disabled"
}
export declare class CreateBundleBodyDto {
    name: string;
    description: string;
    status: status;
    isPaid: boolean;
    submoduleIds: [Tsubmodule];
}
