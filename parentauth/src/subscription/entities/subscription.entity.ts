import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";
import { Tuser } from "src/users/tuser.entity";
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
