import { IsNotEmpty, IsUUID } from 'class-validator';
import { Psubmodule } from 'src/pmodules/psubmodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Role } from '../role.entity';
import { Pmodule } from 'src/pmodules/pmodule.entity';

export class CreateRacmapDto {
  @IsNotEmpty()
  @IsUUID()
  roleId: Role;

  @IsNotEmpty()
  @IsUUID()
  submoduleId: Psubmodule;

  @IsNotEmpty()
  @IsUUID()
  moduleId: Pmodule;


  @IsNotEmpty()
  @IsUUID()
  privilegeId: Privilege;
}
