import { TenantBranch } from "src/users/tenant_branch/entities/tenant_branch.entity";
import { TenantCountry } from "src/users/tenant_country/entities/tenant_country.entity";
import { TenantState } from "src/users/tenant_state/entities/tenant_state.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
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
  @JoinColumn()
  state: TenantState;

  @Column()
  post_code: string;

  @ManyToOne(() => TenantCountry, (country) => country.id)
  @JoinColumn()
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
  @JoinColumn()
  tenantBranchId: TenantBranch;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
