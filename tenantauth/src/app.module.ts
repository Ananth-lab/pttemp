import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrivilegesModule } from './privileges/privileges.module';
import { RolesModule } from './roles/roles.module';
import { TusersModule } from './tusers/tusers.module';
import { ModulesModule } from './modules/modules.module';
import { Role } from './roles/role.entity';
import { Privilege } from './privileges/privilege.entity';
import { Tmodule } from './modules/module.entity';
import { Submodule } from './modules/submodule.entity';
import { Racmap } from './roles/rac-map.entity';
import { Tuser } from './tusers/tuser.entity';

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
          username : 'ananth',
          password : 'u7i8o9p0',
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          synchronize: true,
          entities: [Role, Privilege, Tmodule, Submodule, Racmap, Tuser],
        };
      },
    }),
    PrivilegesModule,
    RolesModule,
    TusersModule,
    ModulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
