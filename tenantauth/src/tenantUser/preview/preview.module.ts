import { Module } from '@nestjs/common';
import { PreviewController } from './preview.controller'; 
import { TenantOrganisationAddressController } from '../tenant_organisation_address/tenant_organisation_address.controller';
import { TenantOrganisationService } from '../tenant_organisation/tenant_organisation.service';
import { TenantOrganisationAddressService } from '../tenant_organisation_address/tenant_organisation_address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantOrganisationAddress } from '../tenant_organisation_address/entities/tenant_organisation_address.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenantOrganisationAddress])],
  controllers: [PreviewController, TenantOrganisationAddressController],
  providers: [TenantOrganisationAddressService]
})
export class PreviewModule {}
