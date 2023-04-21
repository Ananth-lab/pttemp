import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrivilegesModule } from './privileges/privileges.module';
import { RolesModule } from './roles/roles.module';
import { TusersModule } from './tenantUser/tusers/tusers.module';
import { ModulesModule } from './modules/modules.module';
import { Role } from './roles/role.entity';
import { Privilege } from './privileges/privilege.entity';
import { Tmodule } from './modules/module.entity';
import { Submodule } from './modules/submodule.entity';
import { Racmap } from './roles/rac-map.entity';
import { Tuser } from './tenantUser/tusers/tuser.entity';
import { TenantOrganisation } from './tenantUser/tenant_organisation/entities/tenant_organisation.entity';
import { TenantOrganisationAddress } from './tenantUser/tenant_organisation_address/entities/tenant_organisation_address.entity';
import { TenantPoc } from './tenantUser/tenant_poc/entities/tenant_poc.entity';
import { TenantOrganisationModule } from './tenantUser/tenant_organisation/tenant_organisation.module';
import { TenantOrganisationAddressModule } from './tenantUser/tenant_organisation_address/tenant_organisation_address.module';
import { TenantPocModule } from './tenantUser/tenant_poc/tenant_poc.module';
import { IndustryDomain } from './tenantUser/industry_domain/entities/industry_domain.entity';
import { IndustryDomainModule } from './tenantUser/industry_domain/industry_domain.module';
import { TenantBranch } from './tenantUser/tenant_branch/entities/tenant_branch.entity';
import { TenantBranchModule } from './tenantUser/tenant_branch/tenant_branch.module';
import { TenantCountryModule } from './tenantUser/tenant_country/tenant_country.module';
import { TenantStateModule } from './tenantUser/tenant_state/tenant_state.module';
import { TenantState } from './tenantUser/tenant_state/entities/tenant_state.entity';
import { TenantCountry } from './tenantUser/tenant_country/entities/tenant_country.entity';
import { TenantBranchAddress } from './tenantUser/tenant_branch_address/entities/tenant_branch_address.entity';
import { TenantBranchAddressModule } from './tenantUser/tenant_branch_address/tenant_branch_address.module';
//import {PreviewModule }
import { privateEncrypt } from 'crypto';
import Preview from 'twilio/lib/rest/Preview';
import { PreviewModule } from './tenantUser/preview/preview.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          // database: config.get<string>('DB_NAME'),
          database: 'tenantauth',
          username : 'postgres',
          password : 'Pass@123',
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          synchronize: true,
          entities: [Role, Privilege, Tmodule, Submodule, Racmap, Tuser, IndustryDomain,TenantOrganisation,TenantOrganisationAddress,TenantPoc,TenantBranch,TenantState,TenantCountry,TenantBranchAddress],
        };
      },
    }),
    PrivilegesModule,
    RolesModule,
    TusersModule,
    ModulesModule,
    TenantOrganisationModule,TenantOrganisationAddressModule,TenantPocModule,IndustryDomainModule,TenantBranchModule,TenantCountryModule,TenantStateModule,TenantBranchAddressModule,PreviewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
