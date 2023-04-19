import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrivilegesModule } from "./privileges/privileges.module";
import { RolesModule } from "./roles/roles.module";
import { UsersModule } from "./users/users.module";
import { PmodulesModule } from "./pmodules/pmodules.module";
import { Role } from "./roles/role.entity";
import { Privilege } from "./privileges/privilege.entity";
import { Pmodule } from "./pmodules/pmodule.entity";
import { Psubmodule } from "./pmodules/psubmodule.entity";
import { Racmap } from "./roles/rac-map.entity";
import { Tuser } from "./users/tuser.entity";
import { Puser } from "./users/puser.entity";
import { BundlesModule } from "./bundles/bundles.module";
import { Bundle } from "./bundles/bundle.entity";
import { TmodulesModule } from "./tmodules/tmodules.module";
import { Tmodule } from "./tmodules/tmodule.entity";
import { Tsubmodule } from "./tmodules/tsubmodule.entity";
import { Bsmap } from "./bundles/bsmap.entity";
import { TenantOrganisationModule } from "./users/tenant_organisation/tenant_organisation.module";
import { TenantOrganisation } from "./users/tenant_organisation/entities/tenant_organisation.entity";
import { TenantProfileModule } from "./users/tenant_profile/tenant_profile.module";
import { TenantProfile } from "./users/tenant_profile/entities/tenant_profile.entity";
import { TenantBranch } from "./users/tenant_branch/entities/tenant_branch.entity";
import { TenantBranchModule } from "./users/tenant_branch/tenant_branch.module";
import { TenantBranchAddressModule } from "./users/tenant_branch_address/tenant_branch_address.module";
import { TenantBranchAddress } from "./users/tenant_branch_address/entities/tenant_branch_address.entity";
import { TenantPoc } from "./users/tenant_poc/entities/tenant_poc.entity";
import { TenantPocModule } from "./users/tenant_poc/tenant_poc.module";
import { TenantCountryModule } from "./users/tenant_country/tenant_country.module";
import { TenantCountry } from "./users/tenant_country/entities/tenant_country.entity";
import { IndustryDomainModule } from "./users/industry_domain/industry_domain.module";
import { IndustryDomain } from "./users/industry_domain/entities/industry_domain.entity";
import { TenantState } from "./users/tenant_state/entities/tenant_state.entity";
import { TenantOrganisationAddress } from "./users/tenant_organisation_address/entities/tenant_organisation_address.entity";
import { TenantOrganisationAddressModule } from "./users/tenant_organisation_address/tenant_organisation_address.module";
import { TenantStateModule } from "./users/tenant_state/tenant_state.module";
import { PreviewModule } from "./users/preview/preview.module";

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
          database: "parentauth",
          type: "postgres",
          host: "localhost",
          port: 5432,
          username : 'ananth',
          password : 'u7i8o9p0',
    

          synchronize: true,
          entities: [
            TenantOrganisation,
            Role,
            Privilege,
            TenantProfile,
            TenantBranch,
            TenantBranchAddress,
            TenantPoc,
            Pmodule,
            Psubmodule,
            Racmap,
            Tuser,
            Puser,
            Bundle,
            Tmodule,
            Tsubmodule,
            Bsmap,
            TenantCountry,IndustryDomain,TenantState,TenantOrganisationAddress
          ],
        };
      },
    }),
    PrivilegesModule,
    TenantOrganisationModule,
    TenantBranchModule,
    TenantBranchAddressModule,
    TenantPocModule,
    RolesModule,
    UsersModule,
    PmodulesModule,
    TenantProfileModule,
    BundlesModule,
    TmodulesModule,
    TenantCountryModule,
    IndustryDomainModule,TenantOrganisationAddressModule,TenantStateModule,PreviewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
