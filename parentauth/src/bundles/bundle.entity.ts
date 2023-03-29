import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Bsmap } from './bsmap.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Bundle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ default: true })
  isPaid: boolean;

  @Column({ type: 'uuid', nullable: true })
  createdBy: string;

  @OneToMany((type) => Bsmap, (bsmap) => bsmap.bundle)
  bsmaps: Bsmap[];
}
