import { IsNotEmpty, IsUUID } from 'class-validator';

import { Bundle } from '../bundle.entity';
import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';

export class CreateBsmapDto {
  @IsNotEmpty()
  @IsUUID()
  bundle: Bundle;

  @IsNotEmpty()
  @IsUUID()
  tsubmodule: Tsubmodule;
}
