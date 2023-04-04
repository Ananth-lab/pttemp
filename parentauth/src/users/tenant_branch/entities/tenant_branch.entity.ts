import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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
}
