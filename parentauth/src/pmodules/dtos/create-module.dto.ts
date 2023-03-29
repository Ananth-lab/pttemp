import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateModuleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
