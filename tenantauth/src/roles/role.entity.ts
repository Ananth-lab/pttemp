import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Racmap } from './rac-map.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  createdBy: string;

  @OneToMany(() => Racmap, (racmap) => racmap.roleId, { onDelete: 'CASCADE' })
  racs: Racmap[];
}
