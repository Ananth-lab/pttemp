import { Repository } from 'typeorm';
import { Bundle } from './bundle.entity';
import { CreateBundleDto } from './dtos/create-bundle.dto';
import { UpdateBundleDto } from './dtos/update-bundle.dto';
export declare class BundlesService {
    private repo;
    constructor(repo: Repository<Bundle>);
    create(data: CreateBundleDto): Promise<Bundle>;
    find(): Promise<Bundle[]>;
    findById(id: string): Promise<Bundle>;
    remove(id: string): Promise<Bundle>;
    findOneIncludeSubmodule(id: string): Promise<Bundle>;
    update(id: string, data: UpdateBundleDto): Promise<Bundle>;
}
