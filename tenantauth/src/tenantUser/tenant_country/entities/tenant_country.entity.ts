import { TenantBranchAddress } from 'src/tenantUser/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantOrganisationAddress } from 'src/tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity';
import { TenantState } from 'src/tenantUser/tenant_state/entities/tenant_state.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';


@Entity()
export class TenantCountry{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true,nullable:false})
  name: string;

  @OneToMany(() =>  TenantState, tenantState => tenantState.countryId)
  states: TenantState;

  @OneToMany(() => TenantOrganisationAddress, address => address.country)
  tOrganisationAddress: TenantOrganisationAddress

  @OneToMany(() => TenantBranchAddress, tenantBranch => tenantBranch.country)
  tBranch: TenantBranchAddress;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
