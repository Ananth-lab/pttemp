import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinColumn,CreateDateColumn,UpdateDateColumn
} from "typeorm";
import { Tsubmodule } from "./tsubmodule.entity";
import { Subscription } from "src/subscription/entities/subscription.entity";

export enum status {
  ACTIVE = "active",
  DISABLED = "disabled",
}

@Entity()
export class Tmodule {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({
    type: "enum",
    enum: status,
    default: status.ACTIVE,
  })
  status: status;

  @OneToMany(() => Subscription, (sub) => sub.module)
  @JoinColumn()
  subscriptionId: Tmodule;

  @OneToMany((type) => Tsubmodule, (tsubmodule) => tsubmodule.tmodule)
  submodules: Tsubmodule[];

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
