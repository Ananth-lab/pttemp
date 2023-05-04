
import { Tuser } from "src/tenantUser/tusers/tuser.entity"; 
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("simple-array")
  module: string[];

  @Column("simple-array")
  subModule: string[];

  @OneToOne(() => Tuser, (tUser) => tUser.id)
  @JoinColumn()
  tUser: Tuser;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
