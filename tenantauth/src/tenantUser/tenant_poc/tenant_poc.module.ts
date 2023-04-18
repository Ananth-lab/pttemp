import { Module } from '@nestjs/common';
import { TenantPocService } from './tenant_poc.service';
import { TenantPocController } from './tenant_poc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantPoc } from './entities/tenant_poc.entity';

@Module({
  imports : [TypeOrmModule.forFeature([TenantPoc])],
  controllers: [TenantPocController],
  providers: [TenantPocService]
})
export class TenantPocModule {}
