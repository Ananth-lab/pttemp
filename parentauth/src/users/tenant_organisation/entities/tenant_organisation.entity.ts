import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  industry_domain: string;

//   @ManyToOne(() => IndustryDomain, { eager: true })
//   industry_domain: IndustryDomain;

  @Column()
  isParent: boolean;

  @Column()
  parentOrganisationId: string;

  @Column()
  billing_address:string;
//   @ManyToOne(() => TenantOrganisation, { eager: true, nullable: true })
//   parentOrganisation: TenantOrganisation;

//   @OneToOne(() => TenantOrganisationAddress, { eager: true })
//   billing_address: TenantOrganisationAddress;


  // @OneToOne(() => TenantOrganisationAddress)
  // @JoinColumn()
  // billing_address : TenantOrganisationAddress;
}
