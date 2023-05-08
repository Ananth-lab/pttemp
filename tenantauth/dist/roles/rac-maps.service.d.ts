import { Repository } from 'typeorm';
import { Racmap } from './rac-map.entity';
import { CreateRacmapDto } from './dtos/create-racmap.dto';
export declare class RacmapsService {
    private repo;
    constructor(repo: Repository<Racmap>);
    create(data: CreateRacmapDto): Promise<Racmap>;
    remove(id: string): Promise<Racmap[]>;
}
