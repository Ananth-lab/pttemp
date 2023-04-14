
import { TenantBranch } from 'src/users/tenant_branch/entities/tenant_branch.entity';
import { TenantBranchAddress } from 'src/users/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantCountry } from 'src/users/tenant_country/entities/tenant_country.entity'; 
import { TenantOrganisationAddress } from 'src/users/tenant_organisation_address/entities/tenant_organisation_address.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';


@Entity()
export class TenantState{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true,nullable:false})
  name: string;

  @ManyToOne(() => TenantCountry, tenantCountry => tenantCountry.id,{nullable:false})
  countryId: TenantCountry;

  @OneToMany(() => TenantOrganisationAddress, address => address.state)
  tOrgnisationAddress: TenantOrganisationAddress;

  @OneToMany(() => TenantBranchAddress, tenantBranch => tenantBranch.state)
  tBranch: TenantBranchAddress;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
