import { Submodule } from 'src/modules/submodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from './role.entity';
import { Tmodule } from 'src/modules/module.entity';
export declare class Racmap {
    id: string;
    roleId: Role;
    submoduleId: Submodule;
    moduleId: Tmodule;
    privilegeId: Privilege;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
