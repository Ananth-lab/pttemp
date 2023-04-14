import { PartialType } from '@nestjs/mapped-types';
import { CreateIndustryDomainDto } from './create-industry_domain.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateIndustryDomainDto extends PartialType(CreateIndustryDomainDto) {
    @IsNotEmpty()
    name:string
}
