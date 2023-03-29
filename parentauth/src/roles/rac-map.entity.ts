import { Psubmodule } from 'src/pmodules/psubmodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Racmap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Role, (role) => role.racs, { onDelete: 'CASCADE' })
  roleId: Role;

  @ManyToOne(() => Psubmodule, (psubmodule) => psubmodule.racs)
  submoduleId: Psubmodule;

  @ManyToOne(() => Privilege, (privilege) => privilege.racs)
  privilegeId: Privilege;
}
