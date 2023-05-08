import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException, UseGuards } from '@nestjs/common';
import { TenantPocService } from './tenant_poc.service';
import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tenant-poc')
export class TenantPocController {
  constructor(private readonly tenantPocService: TenantPocService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
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
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: string, @Body() updateTenantPocDto: UpdateTenantPocDto) {
    const user =  await this.tenantPocService.update(id, updateTenantPocDto);
    if (!user) throw new HttpException("no data found", 404);
    return "data updated";
  }

  //@UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tenantPocService.remove(+id);
  // }
}
