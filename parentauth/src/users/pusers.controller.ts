import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { PusersService } from './pusers.service';
import { CreatePuserDto } from './dtos/create-puser.dto';
import { LoginDto } from './dtos/login.dto.';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('parent_users')
export class PusersController {
  constructor(
    private pusersService: PusersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  addUser(@Body() body: CreatePuserDto) {
    return this.authService.psignup(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  parentUserLogin(@Request() req): any {
    return this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getPusers() {
    return this.pusersService.findAllPusers();
  }

  @Get('/me')
  getMe() {
    // return this.pusersService
  }
}
