import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from '../role.entity';
export declare class CreateRacmapDto {
    roleId: Role;
    submoduleId: any;
    privilegeId: Privilege;
    moduleId: any;
}
