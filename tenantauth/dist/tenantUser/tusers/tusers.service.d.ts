import { Repository } from "typeorm";
import { Tuser } from "./tuser.entity";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { UpdateTuserDto } from "./dtos/update-tuser.dto";
export declare class TusersService {
    private repo;
    constructor(repo: Repository<Tuser>);
    consumeMessages(): Promise<void>;
    create(body: CreateTuserDto): Promise<void>;
    findOne(email: string): Promise<Tuser>;
    find(): Promise<Tuser[]>;
    update(id: string, updateTuserDto: UpdateTuserDto): Promise<Tuser>;
    findById(id: string): Promise<Tuser>;
}
