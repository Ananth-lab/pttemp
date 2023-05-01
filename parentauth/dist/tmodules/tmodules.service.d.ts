import { Repository } from 'typeorm';
import { Tmodule } from './tmodule.entity';
import { CreateTmoduleDto } from './dtos/create-module.dto';
export declare class TmodulesService {
    private repo;
    constructor(repo: Repository<Tmodule>);
    create(data: CreateTmoduleDto): Promise<Tmodule>;
    find(): Promise<Tmodule[]>;
    findOne(id: string): Promise<Tmodule>;
    findOneIncludeSubmodule(id: string): Promise<Tmodule>;
}
