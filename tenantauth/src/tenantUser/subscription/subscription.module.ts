import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { Privilege } from 'src/privileges/privilege.entity';
import { PrivilegesService } from 'src/privileges/privileges.service';
import { Role } from 'src/roles/role.entity';
import { RolesService } from 'src/roles/roles.service';
import { RolesController } from 'src/roles/roles.controller';
import { RacmapsService } from 'src/roles/rac-maps.service';
import { Racmap } from 'src/roles/rac-map.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Subscription,Privilege,Role, Racmap])],
  controllers: [SubscriptionController, RolesController],
  providers: [SubscriptionService,PrivilegesService,RolesService, RacmapsService]
})
export class SubscriptionModule {}
