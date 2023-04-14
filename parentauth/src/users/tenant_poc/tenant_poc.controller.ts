import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantPocService } from './tenant_poc.service';
import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';

@Controller('tenant-poc')
export class TenantPocController {
  constructor(private readonly tenantPocService: TenantPocService) {}

  @Post()
  async create(@Body() createTenantPocDto: CreateTenantPocDto) {
    return await this.tenantPocService.create(createTenantPocDto);
  }

  // @Get()
  // findAll() {
  //   return this.tenantPocService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tenantPocService.findOne(+id);
  // }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTenantPocDto: UpdateTenantPocDto) {
    return await this.tenantPocService.update(id, updateTenantPocDto);
  }


  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tenantPocService.remove(+id);
  // }
}