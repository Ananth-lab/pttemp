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
  ParseUUIDPipe,
  HttpException,
  UseGuards,
} from "@nestjs/common";
import { TenantOrganisationAddressService } from "./tenant_organisation_address.service";
import { CreateTenantOrganisationAddressDto } from "./dto/create-tenant_organisation_address.dto";
import { UpdateTenantOrganisationAddressDto } from "./dto/update-tenant_organisation_address.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("tenant-organisation-address")
export class TenantOrganisationAddressController {
  constructor(
    private readonly tenantOrganisationAddressService: TenantOrganisationAddressService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async create(
    @Body()
    createTenantOrganisationAddressDto: CreateTenantOrganisationAddressDto
  ) {
    return await this.tenantOrganisationAddressService.create(
      createTenantOrganisationAddressDto
    );
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body()
    updateTenantOrganisationAddressDto: UpdateTenantOrganisationAddressDto
  ) {
    const organisation = await this.tenantOrganisationAddressService.update(
      id,
      updateTenantOrganisationAddressDto
    );
    if (!organisation) throw new HttpException("no data found", 404);
    return "data updated";
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    return await this.tenantOrganisationAddressService.remove(id);
  }
}
