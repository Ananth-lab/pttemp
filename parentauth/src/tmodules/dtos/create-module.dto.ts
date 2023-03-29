import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTmoduleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
