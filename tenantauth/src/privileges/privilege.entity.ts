import { Racmap } from 'src/roles/rac-map.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Privilege {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  privilegeName: string;

  @OneToMany(() => Racmap, (racmap) => racmap.privilegeId)
  racs: Racmap[];

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
