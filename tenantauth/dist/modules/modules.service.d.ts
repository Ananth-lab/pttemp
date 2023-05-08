import { Repository } from 'typeorm';
import { Tmodule } from './module.entity';
import { CreateModuleDto } from './dtos/create-module.dto';
export declare class ModulesService {
    private repo;
    constructor(repo: Repository<Tmodule>);
    consumeMessages(): Promise<void>;
    create(data: CreateModuleDto): Promise<Tmodule>;
    find(): Promise<Tmodule[]>;
    findOne(id: string): Promise<Tmodule>;
    findOneIncludeSubmodule(id: string): Promise<Tmodule>;
    remove(id: string): Promise<Tmodule>;
}
