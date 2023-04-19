import { CreateRoleBodyDto } from './dtos/create-role-body.dto';
import { UpdateRoleBodyDto } from './dtos/update-role-body.dto';
import { RacmapsService } from './rac-maps.service';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    private racmapsService;
    constructor(rolesService: RolesService, racmapsService: RacmapsService);
    createRole(body: CreateRoleBodyDto): Promise<import("./role.entity").Role>;
    getRoles(): Promise<import("./role.entity").Role[]>;
    getRole(id: string): Promise<import("./role.entity").Role>;
    updateRoleDetails(id: string, body: UpdateRoleBodyDto): Promise<void>;
    deleteModule(id: string): Promise<import("./role.entity").Role>;
}
