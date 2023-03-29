import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tsubmodule } from './tsubmodule.entity';

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

  @OneToMany((type) => Tsubmodule, (tsubmodule) => tsubmodule.tmodule)
  submodules: Tsubmodule[];
}
