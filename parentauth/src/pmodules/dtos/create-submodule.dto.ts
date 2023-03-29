import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Pmodule } from '../pmodule.entity';

export class CreateSubmoduleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  pmodule: Pmodule;
}
