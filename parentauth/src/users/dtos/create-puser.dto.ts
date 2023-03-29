import { IsString } from 'class-validator';

export class CreatePuserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
