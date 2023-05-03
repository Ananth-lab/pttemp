import { Racmap } from 'src/roles/rac-map.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tmodule } from './module.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Submodule {
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

  @ManyToOne((type) => Tmodule, (tmodule) => tmodule.submodules)
  tmodule: Tmodule;

  @OneToMany(() => Racmap, (racmap) => racmap.submoduleId)
  racs: Racmap[];

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
