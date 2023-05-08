import { PrivilegesService } from "./privileges.service";
import { CreatePrivilegeDto } from "./dtos/create-privilege.dto";
export declare class PrivilegesController {
    private privilegesService;
    constructor(privilegesService: PrivilegesService);
    addPrivilege(body: CreatePrivilegeDto): Promise<import("./privilege.entity").Privilege>;
    getPrivileges(): Promise<import("./privilege.entity").Privilege[]>;
}
