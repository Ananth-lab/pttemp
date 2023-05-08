import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TusersController } from './tusers.controller';
import { TusersService } from './tusers.service';
import { AuthService } from '../../auth/auth.service';
import { Tuser } from './tuser.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthServices } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tuser])],
  controllers: [TusersController],
  providers: [TusersService, AuthService, JwtService, AuthServices],
  exports :[TusersService]
})
export class TusersModule {}
