import { Submodule } from 'src/modules/submodule.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from './role.entity';
import { Tmodule } from 'src/modules/module.entity';

@Entity()
export class Racmap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Role, (role) => role.racs, { onDelete: 'CASCADE' })
  roleId: Role;

  @ManyToOne(() => Submodule, (submodule) => submodule.id)
  submoduleId: Submodule;

  @ManyToOne(() => Tmodule, (module) => module.id)
  moduleId: Tmodule; 

  @ManyToOne(() => Privilege, (privilege) => privilege.racs)
  privilegeId: Privilege;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
