import { Module } from '@nestjs/common';
import { BundlesController } from './bundles.controller';
import { BundlesService } from './bundles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bundle } from './bundle.entity';
import { BsmapsService } from './bsmaps.service';
import { Bsmap } from './bsmap.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bundle, Bsmap])],
  controllers: [BundlesController],
  providers: [BundlesService, BsmapsService],
})
export class BundlesModule {}
