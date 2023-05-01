import { Tuser } from 'src/tenantUser/tusers/tuser.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Subscription{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:true})
  moduleId: string;

  @Column({nullable:true})
  submoduleId: string;

  @OneToOne(() => Tuser, (tUser) => tUser.id)
  @JoinColumn()
  tUser : Tuser;


  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}