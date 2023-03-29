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

@Module({
  imports: [TypeOrmModule.forFeature([Tuser, Puser])],
  controllers: [TusersController, PusersController],
  providers: [TusersService, PusersService, AuthService, JwtService],
})
export class UsersModule {}
