import { IndustryDomain } from "src/users/industry_domain/entities/industry_domain.entity";
import { TenantBranch } from "src/users/tenant_branch/entities/tenant_branch.entity";
import { TenantOrganisationAddress } from "src/users/tenant_organisation_address/entities/tenant_organisation_address.entity";
import { TenantPoc } from "src/users/tenant_poc/entities/tenant_poc.entity";
import { Tuser } from "src/users/tuser.entity";
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

  // @OneToMany(
  //   () => TenantOrganisation,
  //   (tenantOrganisation) => tenantOrganisation.id,
  //   { nullable: false }
  // )
  // tenantOrganisations: TenantOrganisation;

  @ManyToOne(() => IndustryDomain, (industryDomain) => industryDomain.id, {
    nullable: false,
  })
  @JoinColumn()
  industry_domain: IndustryDomain;

  @OneToOne(() => TenantOrganisationAddress)
  @JoinColumn()
  billingAddress: TenantOrganisationAddress;

  @Column({ default: false })
  isParent: Boolean;

  @ManyToOne(
    () => TenantOrganisation,
    (tenantOrganisation) => tenantOrganisation.id,
    { nullable: true, onDelete: "CASCADE" }
  )
  @JoinColumn()
  tParentOrganisationId: TenantOrganisation;

  @OneToMany(() => TenantBranch, (tenantBranch) => tenantBranch.organisation_id)
  @JoinColumn()
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
