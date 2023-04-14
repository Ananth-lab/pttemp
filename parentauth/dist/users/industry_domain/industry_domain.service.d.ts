import { CreateIndustryDomainDto } from './dto/create-industry_domain.dto';
import { UpdateIndustryDomainDto } from './dto/update-industry_domain.dto';
import { IndustryDomain } from './entities/industry_domain.entity';
import { Repository } from 'typeorm';
export declare class IndustryDomainService {
    private readonly domainRepo;
    constructor(domainRepo: Repository<IndustryDomain>);
    create(createIndustryDomainDto: CreateIndustryDomainDto): Promise<CreateIndustryDomainDto & IndustryDomain>;
    findAll(): Promise<IndustryDomain[]>;
    update(id: string, updateIndustryDomainDto: UpdateIndustryDomainDto): Promise<IndustryDomain>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
