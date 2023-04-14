import { Psubmodule } from 'src/pmodules/psubmodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from './role.entity';
export declare class Racmap {
    id: string;
    roleId: Role;
    submoduleId: Psubmodule;
    privilegeId: Privilege;
}
