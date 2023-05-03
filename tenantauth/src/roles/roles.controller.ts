import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleBodyDto } from './dtos/create-role-body.dto';
import { CreateRoleDto } from './dtos/create-role.dto';
import { UpdateRoleBodyDto } from './dtos/update-role-body.dto';
import { RacmapsService } from './rac-maps.service';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(
    private rolesService: RolesService,
    private racmapsService: RacmapsService,
  ) {}

  @Post()
  async createRole(@Body() body: CreateRoleBodyDto) {
    const role = await this.rolesService.create(body);
    for (let i = 0; i < body.rac.length; i++) {
      const tmp = body.rac[i];
      this.racmapsService.create({ ...tmp, roleId: role });
    }
    return role;
  }

  @Get()
  getRoles() {
    return this.rolesService.find();
  }

  @Get('/:id')
  async getRole(@Param('id') id: string) {
    const role = await this.rolesService.findOneIncludeSubmodule(id);
    if (!role) {
      throw new NotFoundException('not found');
    }
    return role;
  }

  @Patch('/:id')
  async updateRoleDetails(
    @Param('id') id: string,
    @Body() body: UpdateRoleBodyDto,
  ) {
    const role = await this.rolesService.remove(id);
    this.racmapsService.remove(role);

    for (let i = 0; i < body.rac.length; i++) {
      const tmp = body.rac[i];
      this.racmapsService.create({ ...tmp, roleId: role});
    }
  }

  @Delete('/:id')
  deleteModule(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}
