import { Repository } from 'typeorm';
import { Psubmodule } from './psubmodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
export declare class PsubmodulesService {
    private repo;
    constructor(repo: Repository<Psubmodule>);
    create(data: CreateSubmoduleDto): Promise<Psubmodule>;
    find(): Promise<Psubmodule[]>;
    findOne(id: string): Promise<Psubmodule>;
}
