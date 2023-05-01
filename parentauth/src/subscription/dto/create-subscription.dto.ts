import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";

export class CreateSubscriptionDto {
  @IsOptional()
  @IsUUID()
  moduleId: Tmodule;

  @IsOptional()
  @IsUUID()
  submoduleId?: Tsubmodule;

  @IsNotEmpty()
  tUserId : string;
}
