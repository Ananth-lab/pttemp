import { Repository } from 'typeorm';
import { Privilege } from './privilege.entity';
import { CreatePrivilegeDto } from './dtos/create-privilege.dto';
export declare class PrivilegesService {
    private repo;
    constructor(repo: Repository<Privilege>);
    create(data: CreatePrivilegeDto): Promise<Privilege>;
    find(): Promise<Privilege[]>;
}
