import { IsString, IsArray, IsNotEmpty } from 'class-validator';
import { Privilege } from 'src/privileges/privilege.entity';
import { Submodule } from 'src/modules/submodule.entity';

export class UpdateRoleBodyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  rac: [{ submoduleId: Submodule; privilegeId: Privilege }];
}
