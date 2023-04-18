import { Tuser } from "src/tenantUser/tusers/tuser.entity";
import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne } from "typeorm";


@Entity()
@Unique(["billingName", "gstin"])
export class TenantProfile {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  profileImage: string;

  @Column()
  billingName: string;

  @Column()
  billingAddress: string;

  @Column()
  gstin: string;

// @ManyToOne(() => Tuser, tenant => tenant.id
// )
tenant: Tuser;
}
