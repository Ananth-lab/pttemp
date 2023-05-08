import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  UsePipes,
  ValidationPipe,
  HttpCode,
  ParseUUIDPipe,
  UseGuards,
} from "@nestjs/common";

import { TenantOrganisationService } from "./tenant_organisation.service";
import { CreateTenantOrganisationDto } from "./dto/create-tenant_organisation.dto";
import { UpdateTenantOrganisationDto } from "./dto/update-tenant_organisation.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("tenant-organisation")
export class TenantOrganisationController {
  constructor(
    private readonly tenantOrganisationService: TenantOrganisationService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async create(
    @Body() createTenantOrganisationDto: CreateTenantOrganisationDto
  ) {
    return await this.tenantOrganisationService.create(
      createTenantOrganisationDto
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.tenantOrganisationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tenantOrganisationService.findOne(+id);
  // }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateTenantOrganisationDto: UpdateTenantOrganisationDto
  ) {
    const organisation = await this.tenantOrganisationService.update(
      id,
      updateTenantOrganisationDto
    );
    if (!organisation) throw new HttpException("no data found", 404);
    return "data updated";
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.tenantOrganisationService.remove(id);
  }
}
