import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Submodule } from './submodule.entity';

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
}
