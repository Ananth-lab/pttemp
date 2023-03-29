import { Repository } from 'typeorm';
import { Tuser } from './tuser.entity';
import { CreateTuserDto } from './dtos/create-tuser.dto';
export declare class TusersService {
    private repo;
    constructor(repo: Repository<Tuser>);
    create(body: CreateTuserDto): void;
    findOne(email: string): Promise<Tuser>;
    find(): Promise<Tuser[]>;
    findById(id: string): Promise<void>;
}
