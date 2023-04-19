import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { TenantOrganisationAddressService } from "../tenant_organisation_address/tenant_organisation_address.service";

@Controller("preview")
export class PreviewController {
  constructor(
    private readonly tenantAddress: TenantOrganisationAddressService
  ) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tenantAddress.findOne(id);
  }
  catch(error) {
    throw new Error(`Error fetching preview data: ${error.message}`);
  }

  @Post()
  async finalSubmit(@Body() type: any) {
    const { industry_domain, organisationId } = type;
    return [industry_domain, organisationId];
  }
}
