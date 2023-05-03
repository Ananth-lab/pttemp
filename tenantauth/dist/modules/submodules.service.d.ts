import { Repository } from 'typeorm';
import { Submodule } from './submodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
export declare class SubmodulesService {
    private repo;
    constructor(repo: Repository<Submodule>);
    create(data: CreateSubmoduleDto): Promise<Submodule>;
    find(): Promise<Submodule[]>;
    findOne(id: string): Promise<Submodule>;
}
