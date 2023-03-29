import {
  IsString,
  IsArray,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
} from 'class-validator';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export class CreateBundleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(status)
  status: status;

  @IsBoolean()
  isPaid: boolean;
}
