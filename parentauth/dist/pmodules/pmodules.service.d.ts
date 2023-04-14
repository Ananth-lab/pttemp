import { Repository } from 'typeorm';
import { Pmodule } from './pmodule.entity';
import { CreateModuleDto } from './dtos/create-module.dto';
export declare class PmodulesService {
    private repo;
    constructor(repo: Repository<Pmodule>);
    create(data: CreateModuleDto): Promise<Pmodule>;
    find(): Promise<Pmodule[]>;
    findOne(id: string): Promise<Pmodule>;
    findOneIncludeSubmodule(id: string): Promise<Pmodule>;
    remove(id: string): Promise<Pmodule>;
}
