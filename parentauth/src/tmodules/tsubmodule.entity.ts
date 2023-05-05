import { Racmap } from 'src/roles/rac-map.entity';
import { Bsmap } from 'src/bundles/bsmap.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tmodule } from './tmodule.entity';
import { Subscription } from 'src/subscription/entities/subscription.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Tsubmodule {
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

  @OneToMany((type) => Bsmap, (bsmap) => bsmap.tsubmodule)
  bsmaps: Bsmap[];

  @ManyToOne((type) => Tmodule, (tmodule) => tmodule.submodules, {
    nullable: false,
  })
  @JoinColumn()
  tmodule: Tmodule;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
