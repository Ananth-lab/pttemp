import { IsString } from 'class-validator';

export class SinginDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
