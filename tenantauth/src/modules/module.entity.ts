import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Submodule } from './submodule.entity';
import { Racmap } from 'src/roles/rac-map.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Tmodule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: status,
    default: status.ACTIVE,
  })
  status: status;

  @OneToMany((type) => Submodule, (submodule) => submodule.tmodule)
  submodules: Submodule[];


  @OneToMany((type) => Racmap, (rec) => rec.moduleId)
  modules: Racmap[];

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;

}
