import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionDto } from './create-subscription.dto';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Tmodule } from 'src/tmodules/tmodule.entity';
import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {
  
    @IsUUID()
    moduleId: Tmodule;
  
  
    @IsUUID()
    submoduleId: Tsubmodule;
    
}
