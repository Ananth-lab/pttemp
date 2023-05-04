import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";

export class CreateSubscriptionDto {
  @IsOptional()
  module: string[];

  @IsOptional()
  subModule: string[];

  @IsNotEmpty()
  tUserId : string;
}
