import { IsUUID } from 'class-validator';
import { Submodule } from 'src/modules/submodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from '../role.entity';

export class CreateRacmapDto {
  @IsUUID()
  roleId: Role;

  @IsUUID()
  submoduleId: Submodule;

  @IsUUID()
  privilegeId: Privilege;
}
