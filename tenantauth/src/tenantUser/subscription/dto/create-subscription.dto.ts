import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateSubscriptionDto {
  @IsOptional()
  moduleId?: string;

  @IsOptional()
  submoduleId?: string;

  @IsNotEmpty()
  tUserId : string;
}
