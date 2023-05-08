import { CreateRoleBodyDto } from "./dtos/create-role-body.dto";
import { RacmapsService } from "./rac-maps.service";
import { RolesService } from "./roles.service";
import { UpdateRoleBodyDto } from "./dtos/update-role-body.dto";
export declare class RolesController {
    private rolesService;
    private racmapsService;
    constructor(rolesService: RolesService, racmapsService: RacmapsService);
    createRole(body: CreateRoleBodyDto): Promise<import("./role.entity").Role>;
    getRoles(): Promise<import("./role.entity").Role[]>;
    getRole(id: string): Promise<import("./role.entity").Role>;
    updateRoleDetails(id: string, body: UpdateRoleBodyDto): Promise<import("./role.entity").Role>;
    deleteModule(id: string): Promise<import("./role.entity").Role>;
}
