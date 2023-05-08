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
  UseGuards,
} from "@nestjs/common";
import { TenantCountryService } from "./tenant_country.service";
import { CreateTenantCountryDto } from "./dto/create-tenant_country.dto";
import { UpdateTenantCountryDto } from "./dto/update-tenant_country.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("tenant-country")
export class TenantCountryController {
  constructor(private readonly tenantCountryService: TenantCountryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createTenantCountryDto: CreateTenantCountryDto) {
    return await this.tenantCountryService.create(createTenantCountryDto);
  }

  //@UseGuards(JwtAuthGuard)
  // @Get()
  // async findAll() {
  //   return await  this.tenantCountryService.findAll();
  // }

  //  @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // async findOne(@Param('id',ParseUUIDPipe) id: string) {
  //   return this.tenantCountryService.findOne(+id);
  // }


  //  @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id',ParseUUIDPipe) id: string, @Body() updateTenantCountryDto: UpdateTenantCountryDto) {
  //    this.tenantCountryService.update(+id, updateTenantCountryDto);
  // }

  //  @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tenantCountryService.remove(+id);
  // }
}
