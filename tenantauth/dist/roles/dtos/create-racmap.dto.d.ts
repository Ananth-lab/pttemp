import { Submodule } from 'src/modules/submodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from '../role.entity';
export declare class CreateRacmapDto {
    roleId: Role;
    submoduleId: Submodule;
    privilegeId: Privilege;
}
