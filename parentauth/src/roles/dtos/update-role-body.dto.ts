import { IsString, IsArray, IsNotEmpty } from 'class-validator';
import { Privilege } from 'src/privileges/privilege.entity';
import { Psubmodule } from 'src/pmodules/psubmodule.entity';

export class UpdateRoleBodyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  rac: [{ submoduleId: Psubmodule; privilegeId: Privilege }];
}
