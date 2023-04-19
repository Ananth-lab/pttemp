import { TenantOrganisation } from 'src/users/tenant_organisation/entities/tenant_organisation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class TenantPoc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  mobile: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: false, default: false })
  isAddedInPortal: boolean;

  @Column({ nullable: false, default: false })
  isEmailVerified: boolean;

  @Column({ nullable: false, default: false })
  isMobileVerified: boolean;

  @Column({ nullable: true })
  emailVerifyToken: string;

  @Column({ nullable: true, type: 'timestamp' })
  emailVerifyExpires: Date;

  @Column({ nullable: true })
  mobileVerifyToken: string;

  @Column({ nullable: true, type: 'timestamp' })
  mobileVerifyExpires: Date;

  @Column({ nullable: true, type: 'timestamp' })
  passwordResetToken: Date;

  @Column({ nullable: true, type: 'timestamp' })
  passwordResetExpires: Date;

  @OneToOne(() => TenantOrganisation, tenantOrganisation => tenantOrganisation.id)
  @JoinColumn()
  @JoinColumn()
  tenantOrganisation_id:TenantOrganisation
}
