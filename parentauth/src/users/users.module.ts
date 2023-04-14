import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TusersController } from './tusers.controller';
import { PusersController } from './pusers.controller';
import { TusersService } from './tusers.service';
import { PusersService } from './pusers.service';
import { AuthService } from './auth.service';
import { Tuser } from './tuser.entity';
import { Puser } from './puser.entity';
import { JwtService } from '@nestjs/jwt';
import { TenantOrganisationModule } from './tenant_organisation/tenant_organisation.module';
import { TenantOrganisationAddressModule } from './tenant_organisation_address/tenant_organisation_address.module';
import { TenantProfileModule } from './tenant_profile/tenant_profile.module';
import { TenantBranchModule } from './tenant_branch/tenant_branch.module';
import { TenantPocModule } from './tenant_poc/tenant_poc.module';
import { TenantBranchAddressModule } from './tenant_branch_address/tenant_branch_address.module';
import { TenantCountryModule } from './tenant_country/tenant_country.module';
import { TenantStateModule } from './tenant_state/tenant_state.module';
import { IndustryDomainModule } from './industry_domain/industry_domain.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tuser, Puser]), TenantOrganisationModule, TenantOrganisationAddressModule, TenantProfileModule, TenantBranchModule, TenantPocModule, TenantBranchAddressModule, TenantCountryModule, TenantStateModule, IndustryDomainModule],
  controllers: [TusersController, PusersController],
  providers: [TusersService, PusersService, AuthService, JwtService],
})
export class UsersModule {}
