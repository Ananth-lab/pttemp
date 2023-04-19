import { Privilege } from 'src/privileges/privilege.entity';
import { Submodule } from 'src/modules/submodule.entity';
export declare class CreateRoleBodyDto {
    name: string;
    description: string;
    createdBy: string;
    rac: [{
        submoduleId: Submodule;
        privilegeId: Privilege;
    }];
}
