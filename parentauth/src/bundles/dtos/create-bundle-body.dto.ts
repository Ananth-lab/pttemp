import {
  IsUUID,
  IsString,
  IsNumber,
  IS_ARRAY,
  IsArray,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
} from 'class-validator';

import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';

export enum status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
}

export class CreateBundleBodyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(status)
  status: status;

  @IsBoolean()
  isPaid: boolean;

  @IsArray()
  submoduleIds: [Tsubmodule];
}
