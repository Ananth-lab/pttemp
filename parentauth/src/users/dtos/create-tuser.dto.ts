import { IsString } from 'class-validator';

export class CreateTuserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
  
}
