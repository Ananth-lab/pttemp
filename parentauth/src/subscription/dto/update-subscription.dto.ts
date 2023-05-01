import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionDto } from './create-subscription.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {
    @IsOptional()
    moduleId?: string;
  
    @IsOptional()
    submoduleId?: string;
    
}
