import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Psubmodule } from './psubmodule.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Pmodule {
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

  @OneToMany((type) => Psubmodule, (psubmodule) => psubmodule.pmodule)
  submodules: Psubmodule[];
  
  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;

}
