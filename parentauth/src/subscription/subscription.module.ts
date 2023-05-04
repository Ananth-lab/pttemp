import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { Tmodule } from 'src/tmodules/tmodule.entity';
import { Tsubmodule } from 'src/tmodules/tsubmodule.entity';
import { TmodulesService } from 'src/tmodules/tmodules.service';
import { TmodulesController } from 'src/tmodules/tmodules.controller';
import { TsubmodulesController } from 'src/tmodules/tsubmodules.controller';
import { TsubmodulesService } from 'src/tmodules/tsubmodules.service';

@Module({
  imports : [TypeOrmModule.forFeature([Subscription, Tmodule, Tsubmodule])],
  controllers: [SubscriptionController, TmodulesController, TsubmodulesController],
  providers: [SubscriptionService, TmodulesService, TsubmodulesService]
})
export class SubscriptionModule {}
