import { IndustryDomainService } from './industry_domain.service';
import { CreateIndustryDomainDto } from './dto/create-industry_domain.dto';
import { UpdateIndustryDomainDto } from './dto/update-industry_domain.dto';
export declare class IndustryDomainController {
    private readonly industryDomainService;
    constructor(industryDomainService: IndustryDomainService);
    create(createIndustryDomainDto: CreateIndustryDomainDto): Promise<CreateIndustryDomainDto & import("./entities/industry_domain.entity").IndustryDomain>;
    findAll(): Promise<import("./entities/industry_domain.entity").IndustryDomain[]>;
    update(id: string, updateIndustryDomainDto: UpdateIndustryDomainDto): Promise<string>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
