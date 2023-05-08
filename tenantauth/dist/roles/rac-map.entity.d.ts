import { Privilege } from "src/privileges/privilege.entity";
import { Role } from "./role.entity";
export declare class Racmap {
    id: string;
    roleId: Role;
    submoduleId: string[];
    moduleId: string[];
    privilegeId: Privilege;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
