import { IsArray, IsNotEmpty } from 'class-validator';

import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';

export class UpdateBundleSubmoduleDto {
  @IsNotEmpty()
  @IsArray()
  submoduleIds: [Tsubmodule];
}
