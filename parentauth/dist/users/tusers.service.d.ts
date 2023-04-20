import { Repository } from 'typeorm';
import { Tuser } from './tuser.entity';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { UpdateTuserDto } from './dtos/update-tuser.dto';
export declare class TusersService {
    private repo;
    constructor(repo: Repository<Tuser>);
    create(body: CreateTuserDto): Promise<CreateTuserDto & Tuser>;
    find(email: string): Promise<Tuser[]>;
    findAllTusers(): Promise<Tuser[]>;
    update(id: string, UpdateTuserDto: UpdateTuserDto): Promise<Tuser>;
    findOne(id: string): Promise<Tuser>;
}
