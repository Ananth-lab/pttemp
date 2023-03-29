import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePrivilegeDto {
  @IsNotEmpty()
  @IsString()
  privilegeName: string;
}
