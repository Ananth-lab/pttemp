import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';
import { Tmodule } from './module.entity';
import { Submodule } from './submodule.entity';
import { SubmodulesController } from './submodules.controller';
import { SubmodulesService } from './submodules.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tmodule, Submodule])],
  controllers: [ModulesController, SubmodulesController],
  providers: [ModulesService, SubmodulesService],
})
export class ModulesModule {}
