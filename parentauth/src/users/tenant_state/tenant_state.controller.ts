import { Controller, Get, Post, Body, Patch, Param, Delete ,UsePipes,ValidationPipe, UseGuards} from '@nestjs/common';
import { TenantStateService } from './tenant_state.service';
import { CreateTenantStateDto } from './dto/create-tenant_state.dto';
import { UpdateTenantStateDto } from './dto/update-tenant_state.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('tenant-state')
export class TenantStateController {
  constructor(private readonly tenantStateService: TenantStateService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTenantStateDto: CreateTenantStateDto) {
    return await  this.tenantStateService.create(createTenantStateDto);
  }

  // @Get()
  // findAll() {
  //   return this.tenantStateService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tenantStateService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTenantStateDto: UpdateTenantStateDto) {
  //   return this.tenantStateService.update(+id, updateTenantStateDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tenantStateService.remove(+id);
  // }
}
