import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivilegesController } from './privileges.controller';
import { PrivilegesService } from './privileges.service';
import { Privilege } from './privilege.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Privilege])],
  controllers: [PrivilegesController],
  providers: [PrivilegesService],
})
export class PrivilegesModule {}
