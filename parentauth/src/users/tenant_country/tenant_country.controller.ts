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
} from "@nestjs/common";
import { TenantCountryService } from "./tenant_country.service";
import { CreateTenantCountryDto } from "./dto/create-tenant_country.dto";
import { UpdateTenantCountryDto } from "./dto/update-tenant_country.dto";
import { UpdateQueryBuilder } from "typeorm";

@Controller("tenant-country")
export class TenantCountryController {
  constructor(private readonly tenantCountryService: TenantCountryService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTenantCountryDto: CreateTenantCountryDto) {
    return await this.tenantCountryService.create(createTenantCountryDto);
  }

  // @Get()
  // async findAll() {
  //   return await  this.tenantCountryService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id',ParseUUIDPipe) id: string) {
  //   return this.tenantCountryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id',ParseUUIDPipe) id: string, @Body() updateTenantCountryDto: UpdateTenantCountryDto) {
  //    this.tenantCountryService.update(+id, updateTenantCountryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tenantCountryService.remove(+id);
  // }
}
