import { Module } from '@nestjs/common';
import { PreviewController } from './preview.controller';
import { TenantOrganisationAddressController } from '../tenant_organisation_address/tenant_organisation_address.controller';
import { TenantOrganisationService } from '../tenant_organisation/tenant_organisation.service';
import { TenantOrganisationAddressService } from '../tenant_organisation_address/tenant_organisation_address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantOrganisationAddress } from '../tenant_organisation_address/entities/tenant_organisation_address.entity';
import { TenantPoc } from '../tenant_poc/entities/tenant_poc.entity';
import { TenantPocController } from '../tenant_poc/tenant_poc.controller';
import { TenantPocService } from '../tenant_poc/tenant_poc.service';
import { Subscription } from 'src/subscription/entities/subscription.entity';
import { SubscriptionController } from 'src/subscription/subscription.controller';
import { SubscriptionService } from 'src/subscription/subscription.service';

@Module({
  imports:[TypeOrmModule.forFeature([TenantOrganisationAddress, TenantPoc, Subscription])],
  controllers: [PreviewController, TenantOrganisationAddressController, TenantPocController, SubscriptionController],
  providers: [TenantOrganisationAddressService, TenantPocService, SubscriptionService]
})
export class PreviewModule {}
