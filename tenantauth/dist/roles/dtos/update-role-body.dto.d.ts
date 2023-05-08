import { Privilege } from 'src/privileges/privilege.entity';
import { Submodule } from 'src/modules/submodule.entity';
import { Tmodule } from 'src/modules/module.entity';
export declare class UpdateRoleBodyDto {
    name: string;
    description: string;
    rac: [{
        submoduleId: Submodule;
        moduleId: Tmodule;
        privilegeId: Privilege;
    }];
}
