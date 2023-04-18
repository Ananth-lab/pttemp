import { IndustryDomain } from "src/tenantUser/industry_domain/entities/industry_domain.entity";
import { TenantBranch } from "src/tenantUser/tenant_branch/entities/tenant_branch.entity";
import { TenantOrganisationAddress } from "src/tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity";
import { TenantPoc } from "src/tenantUser/tenant_poc/entities/tenant_poc.entity";
import { Tuser } from "src/tenantUser/tusers/tuser.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class TenantOrganisation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  tradename: string;

  @Column()
  gstin: string;

  @Column()
  pan: string;

  @OneToMany(
    () => TenantOrganisation,
    (tenantOrganisation) => tenantOrganisation.id,
    { nullable: false }
  )
  tenantOrganisations: TenantOrganisation;

  @ManyToOne(() => IndustryDomain, (industryDomain) => industryDomain.id, {
    nullable: false,
  })
  industry_domain: IndustryDomain;

  @OneToOne(() => TenantOrganisationAddress)
  @JoinColumn()
  billingAddress: TenantOrganisationAddress;

  @Column({ default: false })
  isParent: boolean;

  @ManyToOne(
    () => TenantOrganisation,
    (tenantOrganisation) => tenantOrganisation.id,
    { nullable: true, onDelete: "CASCADE" }
  )
  tParentOrganisationId: TenantOrganisation;

  @OneToMany(() => TenantBranch, (tenantBranch) => tenantBranch.organisation_id)
  Branch_id: TenantBranch;

  @OneToOne(() => Tuser, tUser=>tUser.id)
  @JoinColumn()
  tUserId: Tuser;

  @OneToOne(() => TenantPoc, tenantPoc => tenantPoc.tenantOrganisation_id)
  @JoinColumn()
  tenantPoc_id:TenantPoc

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;


}
