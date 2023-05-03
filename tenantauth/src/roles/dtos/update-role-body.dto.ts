import { IsString, IsArray, IsNotEmpty } from 'class-validator';
import { Privilege } from 'src/privileges/privilege.entity';
import { Submodule } from 'src/modules/submodule.entity';
import { Tmodule } from 'src/modules/module.entity';

export class UpdateRoleBodyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  rac: [{ submoduleId: Submodule;moduleId : Tmodule; privilegeId: Privilege }];
}
