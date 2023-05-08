import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpException,
  UseGuards,
} from "@nestjs/common";

import { TenantProfileService } from "./tenant_profile.service";
import { CreateTenantProfileDto } from "./dto/create-tenant_profile.dto";
import { UpdateTenantProfileDto } from "./dto/update-tenant_profile.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("tenant-profile")
export class TenantProfileController {
  constructor(private readonly tenantProfileService: TenantProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTenantProfileDto: CreateTenantProfileDto) {
    return await this.tenantProfileService.create(createTenantProfileDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @UsePipes(ValidationPipe)
  async update(
    @Param("id") id: string,
    @Body() updateTenantProfileDto: UpdateTenantProfileDto
  ) {
    const profile = await this.tenantProfileService.update(
      id,
      updateTenantProfileDto
    );
    if (!profile) throw new HttpException("no data found", 404);
    return "profile updated";
  }
}
