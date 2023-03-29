import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { CreatePrivilegeDto } from './dtos/create-privilege.dto';

@Controller('privileges')
export class PrivilegesController {
  constructor(private privilegesService: PrivilegesService) {}

  @Post()
  addPrivilege(@Body() body: CreatePrivilegeDto) {
    return this.privilegesService.create(body);
  }

  @Get()
  getPrivileges() {
    return this.privilegesService.find();
  }
}
