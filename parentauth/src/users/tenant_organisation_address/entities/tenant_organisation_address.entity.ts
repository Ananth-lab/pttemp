import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TenantOrganisationAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  plot_no: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  post_code: string;

  @Column()
  country: string;
}
