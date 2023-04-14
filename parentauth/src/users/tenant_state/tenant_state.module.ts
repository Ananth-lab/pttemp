import { Module } from '@nestjs/common';
import { TenantStateService } from './tenant_state.service';
import { TenantStateController } from './tenant_state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantState } from './entities/tenant_state.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenantState])],
  controllers: [TenantStateController],
  providers: [TenantStateService]
})
export class TenantStateModule {}
