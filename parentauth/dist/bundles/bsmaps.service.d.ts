import { Repository } from 'typeorm';
import { Bsmap } from './bsmap.entity';
import { CreateBsmapDto } from './dtos/create-bsmap';
import { Bundle } from './bundle.entity';
export declare class BsmapsService {
    private repo;
    constructor(repo: Repository<Bsmap>);
    create(data: CreateBsmapDto): void;
    remove(id: Bundle): Promise<Bsmap[]>;
}
