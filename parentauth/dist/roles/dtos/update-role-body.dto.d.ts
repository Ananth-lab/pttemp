import { Privilege } from 'src/privileges/privilege.entity';
import { Psubmodule } from 'src/pmodules/psubmodule.entity';
import { Pmodule } from 'src/pmodules/pmodule.entity';
export declare class UpdateRoleBodyDto {
    name: string;
    description: string;
    rac: [{
        submoduleId: Psubmodule;
        privilegeId: Privilege;
        pmoduleId: Pmodule;
    }];
}
