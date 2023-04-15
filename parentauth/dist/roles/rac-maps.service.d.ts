import { Repository } from 'typeorm';
import { Racmap } from './rac-map.entity';
import { CreateRacmapDto } from './dtos/create-racmap.dto';
import { Role } from './role.entity';
export declare class RacmapsService {
    private repo;
    constructor(repo: Repository<Racmap>);
    create(data: CreateRacmapDto): void;
    remove(id: Role): Promise<Racmap[]>;
}
