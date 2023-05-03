import { IsUUID } from 'class-validator';
import { Submodule } from 'src/modules/submodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from '../role.entity';
import { Tmodule } from 'src/modules/module.entity';

export class CreateRacmapDto {
  @IsUUID()
  roleId: Role;

  @IsUUID()
  submoduleId: Submodule;

  @IsUUID()
  privilegeId: Privilege;

  @IsUUID()
  moduleId : Tmodule;
}
