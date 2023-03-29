import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulesController } from './pmodules.controller';
import { PmodulesService } from './pmodules.service';
import { Pmodule } from './pmodule.entity';
import { Psubmodule } from './psubmodule.entity';
import { PsubmodulesController } from './psubmodules.controller';
import { PsubmodulesService } from './psubmodules.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pmodule, Psubmodule])],
  controllers: [ModulesController, PsubmodulesController],
  providers: [PmodulesService, PsubmodulesService],
})
export class PmodulesModule {}
