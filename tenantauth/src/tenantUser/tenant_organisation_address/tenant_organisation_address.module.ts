import { Module } from '@nestjs/common';
import { TenantOrganisationAddressService } from './tenant_organisation_address.service';
import { TenantOrganisationAddressController } from './tenant_organisation_address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantOrganisationAddress } from './entities/tenant_organisation_address.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenantOrganisationAddress])],
  controllers: [TenantOrganisationAddressController],
  providers: [TenantOrganisationAddressService]
})
export class TenantOrganisationAddressModule {}
