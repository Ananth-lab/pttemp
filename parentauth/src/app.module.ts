import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrivilegesModule } from './privileges/privileges.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { PmodulesModule } from './pmodules/pmodules.module';
import { Role } from './roles/role.entity';
import { Privilege } from './privileges/privilege.entity';
import { Pmodule } from './pmodules/pmodule.entity';
import { Psubmodule } from './pmodules/psubmodule.entity';
import { Racmap } from './roles/rac-map.entity';
import { Tuser } from './users/tuser.entity';
import { Puser } from './users/puser.entity';
import { BundlesModule } from './bundles/bundles.module';
import { Bundle } from './bundles/bundle.entity';
import { TmodulesModule } from './tmodules/tmodules.module';
import { Tmodule } from './tmodules/tmodule.entity';
import { Tsubmodule } from './tmodules/tsubmodule.entity';
import { Bsmap } from './bundles/bsmap.entity';

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
          database: 'parentauth',
          username : "ananth",
          password : "u7i8o9p0",
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          synchronize: true,
          entities: [
            Role,
            Privilege,
            Pmodule,
            Psubmodule,
            Racmap,
            Tuser,
            Puser,
            Bundle,
            Tmodule,
            Tsubmodule,
            Bsmap,
          ],
        };
      },
    }),
    PrivilegesModule,
    RolesModule,
    UsersModule,
    PmodulesModule,
    BundlesModule,
    TmodulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
