import {
  IsUUID,
  IsString,
  IsNumber,
  IS_ARRAY,
  IsArray,
  IsNotEmpty,
} from 'class-validator';
import { Privilege } from 'src/privileges/privilege.entity';
import { Submodule } from 'src/modules/submodule.entity';
import { Tmodule } from 'src/modules/module.entity';

export class CreateRoleBodyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  createdBy: string;

  @IsArray()
  rac: [{ submoduleId: Submodule;moduleId : Tmodule; privilegeId: Privilege }];
}
