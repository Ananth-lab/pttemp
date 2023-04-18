import { Body, Controller, Get, Post } from '@nestjs/common';
import { TusersService } from './tusers.service';
import { AuthService } from './auth.service';
import { CreateTuserDto } from './dtos/create-tuser.dto';

@Controller('tenant_users')
export class TusersController {
  constructor(
    private tusersService: TusersService,
    private authService: AuthService,
  ) {}

  @Get()
  getAll() {
    return this.tusersService.find();
  }

  @Get('/:id')
  getUserById(id: string) {
    return this.tusersService.findById(id);
  }

  @Post('/signup')
  addUser(@Body() body: CreateTuserDto) {
    return this.authService.signup(body);
  }
}
