import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { PrivilegesService } from "./privileges.service";
import { CreatePrivilegeDto } from "./dtos/create-privilege.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("privileges")
export class PrivilegesController {
  constructor(private privilegesService: PrivilegesService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  addPrivilege(@Body() body: CreatePrivilegeDto) {
    return this.privilegesService.create(body);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getPrivileges() {
    return this.privilegesService.find();
  }
}
