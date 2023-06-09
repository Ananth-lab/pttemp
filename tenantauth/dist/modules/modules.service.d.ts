import { Repository } from 'typeorm';
import { Tmodule } from './module.entity';
import { CreateModuleDto } from './dtos/create-module.dto';
export declare class ModulesService {
    private repo;
    constructor(repo: Repository<Tmodule>);
    create(data: CreateModuleDto): void;
    find(): Promise<Tmodule[]>;
    findOne(id: string): Promise<Tmodule>;
    findOneIncludeSubmodule(id: string): Promise<Tmodule>;
    remove(id: string): Promise<Tmodule>;
}
