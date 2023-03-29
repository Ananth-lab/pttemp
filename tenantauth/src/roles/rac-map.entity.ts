import { Submodule } from 'src/modules/submodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Racmap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Role, (role) => role.racs, { onDelete: 'CASCADE' })
  roleId: Role;

  @ManyToOne(() => Submodule, (submodule) => submodule.racs)
  submoduleId: Submodule;

  @ManyToOne(() => Privilege, (privilege) => privilege.racs)
  privilegeId: Privilege;
}
