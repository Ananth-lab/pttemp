import { TenantOrganisation } from 'src/tenantUser/tenant_organisation/entities/tenant_organisation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class IndustryDomain{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true,nullable:false})
  name: string;

  @OneToMany(() => TenantOrganisation, tenantOrganisation =>tenantOrganisation.id,{nullable:false})
  tenantOrganisations: TenantOrganisation;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
