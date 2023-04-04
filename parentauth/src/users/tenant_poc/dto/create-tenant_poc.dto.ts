
import { IsString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateTenantPocDto {
  @IsOptional()
  @IsString()
  profileImage?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  mobile: string;

  @IsOptional()
  @IsPhoneNumber(null)
  phone?: string;

//   @IsNotEmpty()
//   tenantId: string;

  @IsNotEmpty()
  isAddedInPortal: boolean;

  @IsOptional()
  isEmailVerified?: boolean;

  @IsOptional()
  isMobileVerified?: boolean;

  @IsOptional()
  emailVerifyToken?: string;

  @IsOptional()
  emailVerifyExpires?: Date;

  @IsOptional()
  mobileVerifyToken?: string;

  @IsOptional()
  mobileVerifyExpires?: Date;

  @IsOptional()
  passwordResetToken?: Date;

  @IsOptional()
  passwordResetExpires?: Date;
}
