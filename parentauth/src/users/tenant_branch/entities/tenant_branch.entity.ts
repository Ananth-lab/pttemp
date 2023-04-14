import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TenantBranch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

//   @ManyToOne(() => TenantOrganisation)
//   organisation: TenantOrganisation;

  @Column()
  name: string;

  @Column()
  gstin: string;

  @Column()
  isparent: boolean;



//   @ManyToOne(() => TenantBranch)
//   parentbranch: TenantBranch;

@CreateDateColumn()
readonly createdAt!: Date;

@UpdateDateColumn()
readonly updatedAt!: Date;
}
