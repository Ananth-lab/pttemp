import { IsString, IsBoolean, IsEnum } from 'class-validator';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export class UpdateBundleDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(status)
  status: status;

  @IsBoolean()
  isPaid: boolean;
}
