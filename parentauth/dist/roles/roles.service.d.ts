import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto } from './dtos/create-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';
export declare class RolesService {
    private repo;
    constructor(repo: Repository<Role>);
    create(data: CreateRoleDto): Promise<Role>;
    find(): Promise<Role[]>;
    findOneIncludeSubmodule(id: string): Promise<Role>;
    remove(id: string): Promise<Role>;
    update(id: string, data: UpdateRoleDto): Promise<Role>;
}
