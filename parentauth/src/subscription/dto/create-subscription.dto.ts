import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";

export class CreateSubscriptionDto {
  @IsOptional()
  @IsUUID()
  module: Tmodule;

  @IsOptional()
  @IsUUID()
  submodule?: Tsubmodule;

  @IsNotEmpty()
  tUserId : string;
}
