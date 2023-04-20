import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { TenantOrganisation } from '../tenant_organisation/entities/tenant_organisation.entity';
export enum status {
  PENDING = 'pending',
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

@Entity()
export class Tuser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({
    default: false,
  })
  isEmailVerified: boolean;

  @Column({ nullable: false })
  mobile: string;

  @Column({ default: true })
  isMobileVerified: boolean;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: 'enum',
    enum: status,
    default: status.ACTIVE,
  })
  status: status;

  @Column({ default: 'tenant_user' })
  model: string;

  @Column({ nullable: true })
  emailVerifyToken: string;

  @OneToOne(() => TenantOrganisation, tenantOrganisation=>tenantOrganisation.tUserId)
  @JoinColumn()
  orgId: TenantOrganisation;

  @Column({ nullable: true })
  emailVerifyExpires: string;

  @Column({ nullable: true })
  mobileVerifyToken: string;

  @Column({ nullable: true })
  mobileVerifyExpires: string;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ nullable: true })
  passwordResetExpires: string;

  @Column({ nullable: true })
  otp: string;

  @Column({ nullable: true })
  otpExpires: string;
}