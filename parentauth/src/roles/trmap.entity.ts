import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trmap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  roleId: number;

  @Column()
  tenantUserId: number;
}
