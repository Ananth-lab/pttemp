import { Body, Controller, Get, Post } from '@nestjs/common';
import { PusersService } from './pusers.service';
import { AuthService } from './auth.service';
import { CreatePuserDto } from './dtos/create-puser.dto';
import { SinginDto } from './dtos/signin.dto';

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

  @Post('/signin')
  parentUserLogin(@Body() body: SinginDto) {
    return this.authService.pSignin(body.email, body.password);
  }

  @Get()
  getPusers() {
    return this.pusersService.findAllPusers();
  }

  @Get('/me')
  getMe() {
    // return this.pusersService
  }
}
