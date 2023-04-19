import { Module } from '@nestjs/common';
import { PreviewService } from './preview.service';
import { PreviewController } from './preview.controller';
import { TenantOrganisationAddressController } from '../tenant_organisation_address/tenant_organisation_address.controller';
import { TenantOrganisationService } from '../tenant_organisation/tenant_organisation.service';

@Module({
  controllers: [PreviewController, TenantOrganisationAddressController],
  providers: [PreviewService, TenantOrganisationService]
})
export class PreviewModule {}
