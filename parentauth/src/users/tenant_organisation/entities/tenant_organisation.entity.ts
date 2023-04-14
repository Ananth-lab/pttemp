import { IndustryDomain } from 'src/users/industry_domain/entities/industry_domain.entity';
import { TenantOrganisationAddress } from 'src/users/tenant_organisation_address/entities/tenant_organisation_address.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TenantOrganisation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  tradename: string;

  @Column()
  gstin: string;

  @Column()
  pan: string;

  @OneToMany(() => TenantOrganisation, tenantOrganisation =>tenantOrganisation.id,{nullable:false})
  tenantOrganisations: TenantOrganisation;

  @ManyToOne(() => IndustryDomain,industryDomain => industryDomain.id,{nullable:false})
  industry_domain: IndustryDomain;

  @OneToOne(() => TenantOrganisationAddress)
  @JoinColumn()
  billingAddress: TenantOrganisationAddress;

  @Column({ default: false })
  isParent: Boolean;

  @ManyToOne(() => TenantOrganisation, tenantOrganisation => tenantOrganisation.id,{nullable: true,onDelete:"CASCADE"})
  tParentOrganisationId: TenantOrganisation;


  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
