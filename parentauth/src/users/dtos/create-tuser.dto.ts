import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

export class CreateTuserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  @Optional()
  password: string;

  @IsString()
  mobile : string;
  
}