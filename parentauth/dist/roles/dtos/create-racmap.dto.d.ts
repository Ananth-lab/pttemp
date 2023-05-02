import { Psubmodule } from 'src/pmodules/psubmodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from '../role.entity';
import { Pmodule } from 'src/pmodules/pmodule.entity';
export declare class CreateRacmapDto {
    roleId: Role;
    submoduleId: Psubmodule;
    moduleId: Pmodule;
    privilegeId: Privilege;
}
