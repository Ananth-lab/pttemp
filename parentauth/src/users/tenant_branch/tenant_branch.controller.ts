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
} from "@nestjs/common";
import { TenantBranchService } from "./tenant_branch.service";
import { CreateTenantBranchDto } from "./dto/create-tenant_branch.dto";
import { UpdateTenantBranchDto } from "./dto/update-tenant_branch.dto";

@Controller("tenant-branch")
export class TenantBranchController {
  constructor(private readonly tenantBranchService: TenantBranchService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTenantBranchDto: CreateTenantBranchDto) {
    return await this.tenantBranchService.create(createTenantBranchDto);
  }

  @Patch(":id")
  @UsePipes(ValidationPipe)
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateTenantBranchDto: UpdateTenantBranchDto
  ) {
    const branch = await this.tenantBranchService.update(
      id,
      updateTenantBranchDto
    );
    return branch;
  }
}
