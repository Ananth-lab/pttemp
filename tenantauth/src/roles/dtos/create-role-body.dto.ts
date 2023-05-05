import {
  IsUUID,
  IsString,
  IsNumber,
  IS_ARRAY,
  IsArray,
  IsNotEmpty,
} from 'class-validator';

export class CreateRoleBodyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  createdBy: string;

  @IsArray()
  rac: any;
}
