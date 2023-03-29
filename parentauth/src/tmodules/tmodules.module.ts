import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmodulesController } from './tmodules.controller';
import { TmodulesService } from './tmodules.service';
import { Tmodule } from './tmodule.entity';
import { Tsubmodule } from './tsubmodule.entity';
import { TsubmodulesService } from './tsubmodules.service';
import { TsubmodulesController } from './tsubmodules.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tmodule, Tsubmodule])],
  controllers: [TmodulesController, TsubmodulesController],
  providers: [TmodulesService, TsubmodulesService],
})
export class TmodulesModule {}
