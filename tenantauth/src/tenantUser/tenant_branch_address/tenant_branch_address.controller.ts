import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { TenantBranchAddressService } from "./tenant_branch_address.service";
import { CreateTenantBranchAddressDto } from "./dto/create-tenant_branch_address.dto";
import { UpdateTenantBranchAddressDto } from "./dto/update-tenant_branch_address.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("tenant-branch-address")
export class TenantBranchAddressController {
  constructor(
    private readonly tenantBranchAddressService: TenantBranchAddressService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createTenantBranchAddressDto: CreateTenantBranchAddressDto
  ) {
    return await this.tenantBranchAddressService.create(
      createTenantBranchAddressDto
    );
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  async update(
    @Param("id") id: string,
    @Body() updateTenantBranchAddressDto: UpdateTenantBranchAddressDto
  ) {
    return await this.tenantBranchAddressService.update(
      id,
      updateTenantBranchAddressDto
    );
  }
}
