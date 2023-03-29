import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role } from './role.entity';
import { Racmap } from './rac-map.entity';

import { RacmapsService } from './rac-maps.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Racmap])],
  controllers: [RolesController],
  providers: [RolesService, RacmapsService],
})
export class RolesModule {}
