import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Tmodule } from '../tmodule.entity';

export class CreateSubmoduleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  tmodule: Tmodule;
}
