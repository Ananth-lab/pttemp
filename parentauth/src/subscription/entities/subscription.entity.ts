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
} from "typeorm";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // @Column({nullable:true})
  @ManyToOne(() => Tmodule, (tModule) => tModule.id,{nullable:true})
  @JoinColumn()
  module: Tmodule;

  @ManyToOne(() =>Tsubmodule, (sModule) => sModule.id,{nullable:true})
  @JoinColumn()
  subModule: Tsubmodule;

  @OneToOne(() => Tuser, (tUser) => tUser.id)
  @JoinColumn()
  tUser: Tuser;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
