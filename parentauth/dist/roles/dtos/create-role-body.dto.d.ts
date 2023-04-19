import { Privilege } from 'src/privileges/privilege.entity';
import { Psubmodule } from 'src/pmodules/psubmodule.entity';
export declare class CreateRoleBodyDto {
    name: string;
    description: string;
    createdBy: string;
    rac: [{
        submoduleId: Psubmodule;
        privilegeId: Privilege;
    }];
}
