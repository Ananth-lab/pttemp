import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TusersService } from './tusers.service';
import { AuthService } from './auth.service';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { SinginDto } from './dtos/signin.dto';

@Controller('tenant_users')
export class TusersController {
  constructor(
    private tusersService: TusersService,
    private authService: AuthService,
  ) {}

  @Post('/self_signup')
  addUser(@Body() body: CreateTuserDto) {
    return this.authService.tsignup(body);
  }

  @Post('/signin')
  tenantUserLogin(@Body() body: SinginDto) {
    return this.authService.tSignin(body.email, body.password);
  }

  @Get()
  getTusers() {
    return this.tusersService.findAllTusers();
  }

  @Get('/:id')
  getAPuser(@Param('id') id: string) {
    return this.tusersService.findOne(id);
  }
}
