import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TusersController } from './tusers.controller';
import { TusersService } from './tusers.service';
import { AuthService } from './auth.service';
import { Tuser } from './tuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tuser])],
  controllers: [TusersController],
  providers: [TusersService, AuthService],
})
export class TusersModule {}
