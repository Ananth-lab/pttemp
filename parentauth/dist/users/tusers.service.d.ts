import { Repository } from "typeorm";
import { Tuser } from "./tuser.entity";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
export declare class TusersService {
    private repo;
    constructor(repo: Repository<Tuser>);
    create(body: CreateTuserDto): Promise<Tuser>;
    find(email: string): Promise<Tuser[]>;
    findAllTusers(): Promise<Tuser[]>;
    findOne(id: string): Promise<Tuser>;
}
