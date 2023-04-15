import { Repository } from 'typeorm';
import { Tsubmodule } from './tsubmodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
export declare class TsubmodulesService {
    private repo;
    constructor(repo: Repository<Tsubmodule>);
    create(data: CreateSubmoduleDto): Promise<Tsubmodule>;
    find(): Promise<Tsubmodule[]>;
    findOne(id: string): Promise<Tsubmodule>;
}
