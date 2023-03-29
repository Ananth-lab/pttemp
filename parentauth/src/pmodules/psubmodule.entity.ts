import { Racmap } from 'src/roles/rac-map.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Pmodule } from './pmodule.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Psubmodule {
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

  @ManyToOne((type) => Pmodule, (pmodule) => pmodule.submodules, {
    nullable: false,
  })
  pmodule: Pmodule;

  @OneToMany(() => Racmap, (racmap) => racmap.submoduleId)
  racs: Racmap[];
}
