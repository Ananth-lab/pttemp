import { TenantBranchAddress } from 'src/tenantUser/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantOrganisation } from 'src/tenantUser/tenant_organisation/entities/tenant_organisation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class TenantBranch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TenantOrganisation,tenantOrganisation=>tenantOrganisation.id,{nullable:false})
  @JoinColumn()
  organisation_id: TenantOrganisation;

  @Column()
  name: string;

  @Column()
  gstin: string;

  @Column({ default: false })
  isParent: boolean;

  @ManyToOne(() => TenantBranch, (tenantBranch) => tenantBranch.id, {
    nullable: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  parentbranchId: TenantBranch;

  @OneToOne(
    () => TenantBranchAddress,
    (tenantBranchAddress) => tenantBranchAddress.tenantBranchId,
    { nullable: false }
  )
  TenantBranchAddressId: TenantBranchAddress;

@CreateDateColumn()
readonly createdAt!: Date;

@UpdateDateColumn()
readonly updatedAt!: Date;
}
