import { Privilege } from 'src/privileges/privilege.entity';
import { Submodule } from 'src/modules/submodule.entity';
export declare class UpdateRoleBodyDto {
    name: string;
    description: string;
    rac: [{
        submoduleId: Submodule;
        privilegeId: Privilege;
    }];
}
