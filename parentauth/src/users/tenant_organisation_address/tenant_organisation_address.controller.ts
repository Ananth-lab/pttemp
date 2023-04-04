import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantOrganisationAddressService } from './tenant_organisation_address.service';
import { CreateTenantOrganisationAddressDto } from './dto/create-tenant_organisation_address.dto';
import { UpdateTenantOrganisationAddressDto } from './dto/update-tenant_organisation_address.dto';

@Controller('tenant-organisation-address')
export class TenantOrganisationAddressController {
  constructor(private readonly tenantOrganisationAddressService: TenantOrganisationAddressService) {}

  @Post()
 async create(@Body() createTenantOrganisationAddressDto: CreateTenantOrganisationAddressDto) {
    return await  this.tenantOrganisationAddressService.create(createTenantOrganisationAddressDto);
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenantOrganisationAddressDto: UpdateTenantOrganisationAddressDto) {
    return this.tenantOrganisationAddressService.update(id, updateTenantOrganisationAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantOrganisationAddressService.remove(id);
  }
}
