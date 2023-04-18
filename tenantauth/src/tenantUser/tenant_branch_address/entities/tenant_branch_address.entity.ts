import { TenantBranch } from "src/tenantUser/tenant_branch/entities/tenant_branch.entity";
import { TenantCountry } from "src/tenantUser/tenant_country/entities/tenant_country.entity";
import { TenantState } from "src/tenantUser/tenant_state/entities/tenant_state.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
// import { TenantBranch } from './TenantBranch';
// import { Country } from './Country';
// import { State } from './State';

@Entity()
export class TenantBranchAddress {
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

  @ManyToOne(() => TenantState, (state) => state.id)
  state: TenantState;

  @Column()
  post_code: string;

  @ManyToOne(() => TenantCountry, (country) => country.id)
  country: TenantCountry;

  @Column({ default: false })
  isParent: Boolean;

  @ManyToOne(
    () => TenantBranchAddress,
    (tenantBranchAddress) => tenantBranchAddress.id,
    {
      nullable: true,
      onDelete: "CASCADE",
    }
  )
  tenantBranhAddress: TenantBranchAddress;

  @OneToOne(() => TenantBranch, (tenantBranch) => tenantBranch.id, {
    nullable: false,
  })
  tenantBranchId: TenantBranch;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
