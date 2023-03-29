import {
  IsUUID,
  IsString,
  IsNumber,
  IS_ARRAY,
  IsArray,
  IsNotEmpty,
} from 'class-validator';
import { Privilege } from 'src/privileges/privilege.entity';
import { Psubmodule } from 'src/pmodules/psubmodule.entity';

export class CreateRoleBodyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  createdBy: string;

  @IsArray()
  rac: [{ submoduleId: Psubmodule; privilegeId: Privilege }];
}
