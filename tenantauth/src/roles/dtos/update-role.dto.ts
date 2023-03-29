import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateRoleDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
