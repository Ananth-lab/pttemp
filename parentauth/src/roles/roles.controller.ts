import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
  NotFoundException,
  UseGuards,
} from "@nestjs/common";
import { CreateRoleBodyDto } from "./dtos/create-role-body.dto";
import { CreateRoleDto } from "./dtos/create-role.dto";
import { UpdateRoleDto } from "./dtos/update-role.dto";
import { RacmapsService } from "./rac-maps.service";
import { RolesService } from "./roles.service";
import { UpdateRoleBodyDto } from "./dtos/update-role-body.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("roles")
export class RolesController {
  constructor(
    private rolesService: RolesService,
    private racmapsService: RacmapsService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createRole(@Body() body: CreateRoleBodyDto) {
    const role = await this.rolesService.create(body);
    console.log(body.rac);
    for (let i = 0; i < body.rac.length; i++) {
      const tmp = body.rac[i];
      this.racmapsService.create({
        ...tmp,
        roleId: role,
        moduleId: tmp.pmoduleId,
      });
    }
    return role;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getRoles() {
    return this.rolesService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  getRole(@Param("id") id: string) {
    const role = this.rolesService.findOneIncludeSubmodule(id);
    if (!role) {
      throw new NotFoundException("not found");
    }
    return role;
  }

  @UseGuards(JwtAuthGuard)
  @Patch("/:id")
  async updateRoleDetails(
    @Param("id") id: string,
    @Body() body: UpdateRoleBodyDto
  ) {
    const role = await this.rolesService.update(id, body);
    this.racmapsService.remove(role);

    for (let i = 0; i < body.rac.length; i++) {
      const tmp = body.rac[i];
      this.racmapsService.create({
        ...tmp,
        roleId: role,
        moduleId: tmp.pmoduleId,
      });
    }

    return role;
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  deleteModule(@Param("id") id: string) {
    return this.rolesService.remove(id);
  }
}
