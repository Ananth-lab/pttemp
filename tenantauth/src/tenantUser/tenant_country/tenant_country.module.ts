import { Module } from '@nestjs/common';
import { TenantCountryService } from './tenant_country.service';
import { TenantCountryController } from './tenant_country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantCountry } from './entities/tenant_country.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenantCountry])],
  controllers: [TenantCountryController],
  providers: [TenantCountryService]
})
export class TenantCountryModule {}
