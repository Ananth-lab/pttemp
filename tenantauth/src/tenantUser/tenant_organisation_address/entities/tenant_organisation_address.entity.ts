import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantOrganisation } from "src/tenantUser/tenant_organisation/entities/tenant_organisation.entity";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class TenantOrganisationAddress {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  plot_no: string;

  @Column()
  city: string;

  @ManyToOne(() => TenantState, (tenantState) => tenantState.id, {
    nullable: false,
  })
  @JoinColumn()
  state: TenantState;

  @Column()
  post_code: string;

  @ManyToOne(() => TenantCountry, (tenantCountry) => tenantCountry.id, {
    nullable: false,
  })
  @JoinColumn()
  country: TenantCountry;

  @OneToOne(
    () => TenantOrganisation,
    (tenantOrganisation) => tenantOrganisation.billingAddress,
    { nullable: false }
  )
  @JoinColumn()
  tenantOrganisationId: TenantOrganisation;

  @Column({ default: false })
  isParent: Boolean;

  @ManyToOne(
    () => TenantOrganisationAddress,
    (tenantOrganisationAddress) => tenantOrganisationAddress.id,
    { nullable: true, onDelete: "CASCADE" }
  )
  @JoinColumn()
  parentOaddress:TenantOrganisationAddress

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
