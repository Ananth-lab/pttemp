import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { TenantBranch } from './TenantBranch';
// import { Country } from './Country';
// import { State } from './State';

@Entity()
export class TenantBranchAddress {
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  plot_no: string;

  @Column({ type: 'varchar' })
  city: string;

//   @ManyToOne(() => State, state => state.tenantBranchAddresses)
//   state: State;

  @Column({ type: 'varchar' })
  post_code: string;

//   @ManyToOne(() => Country, country => country.tenantBranchAddresses)
//   country: Country;

//   @ManyToOne(() => TenantBranch, tenantBranch => tenantBranch.addresses)
//   branch: TenantBranch;
}
