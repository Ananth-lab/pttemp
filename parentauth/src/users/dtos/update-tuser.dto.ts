import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTuserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  mobile : string;
  
}