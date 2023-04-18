import { Module } from '@nestjs/common';
import { TenantOrganisationService } from './tenant_organisation.service';
import { TenantOrganisationController } from './tenant_organisation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantOrganisation } from './entities/tenant_organisation.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([TenantOrganisation])],
  controllers: [TenantOrganisationController],
  providers: [TenantOrganisationService]
})
export class TenantOrganisationModule {}
