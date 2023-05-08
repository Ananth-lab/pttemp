import { Repository } from 'typeorm';
import { Puser } from './puser.entity';
import { CreatePuserDto } from './dtos/create-puser.dto';
export declare class PusersService {
    private repo;
    constructor(repo: Repository<Puser>);
    create(body: CreatePuserDto): Promise<Puser>;
    findOne(email: string): Promise<Puser[]>;
    findAllPusers(): Promise<Puser[]>;
}
