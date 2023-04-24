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
import { connectRabbitMQ } from "../rabbit";
import { TenantPocService } from "../tenant_poc/tenant_poc.service";

@Controller("preview")
export class PreviewController {
  constructor(
    private readonly tenantAddress: TenantOrganisationAddressService,
    private readonly tenantPoc: TenantPocService
  ) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    try {
      return this.tenantAddress.findOne(id);
    } catch (error) {
      throw new Error(`Error fetching preview data: ${error.message}`);
    }
  }

  @Post()
  async finalSubmit(@Body() data: any) {
    const tenantOrgAdddressDetail = data;
    const tenantOrgAdddressDetails: any = {};
    for (const [key, value] of Object.entries(data)) {
      if (typeof value !== "object" || value === null) {
        tenantOrgAdddressDetails[key] = value;
      }
    }

    const tenantOrganisationDetail = data.tenantOrganisationId;
    const tenantOrganisationDetails: any = {};
    for (const [key, value] of Object.entries(tenantOrganisationDetail)) {
      if (typeof value !== "object" || value === null) {
        tenantOrganisationDetails[key] = value;
      }
    }
    const tenantUserDetail = tenantOrganisationDetail.tUserId;
    const tenantUserDetails: any = {};
    for (const [key, value] of Object.entries(tenantUserDetail)) {
      if (typeof value !== "object" || value === null) {
        tenantUserDetails[key] = value;
      }
    }
    const tenantIndustyDetails = tenantOrganisationDetail.industry_domain;
    const tenantCountryDetails = data.country;
    const tenantStateDetails = data.state;
    tenantStateDetails.countryId = tenantCountryDetails.id;
    tenantOrgAdddressDetails.state = tenantStateDetails.id;
    tenantOrgAdddressDetails.country = tenantCountryDetails.id;
    tenantOrganisationDetails.tUserId = tenantUserDetails.id;
    tenantOrganisationDetails.industry_domain = tenantIndustyDetails.id;
    tenantOrgAdddressDetails.tenantOrganisationId =
      tenantOrganisationDetails.id;

    const tenantPocDetails = await this.tenantPoc.findOneOnOrg(
      tenantOrganisationDetail.id
    );
    tenantPocDetails.tenantOrganisation_id = tenantOrganisationDetail.id;

    const rabbitConnection = await connectRabbitMQ();
    if (!rabbitConnection) {
      throw new Error("Failed to connect to RabbitMQ");
    }

    const { channel, exchange } = rabbitConnection;

    setTimeout(async () => {
      await channel.publish(
        exchange,
        "tenantUserDetails",
        Buffer.from(
          JSON.stringify({
            tenantUserDetails,
          })
        )
      );
    }, 100);

    setTimeout(async () => {
      await channel.publish(
        exchange,
        "tenantCountryDetails",
        Buffer.from(
          JSON.stringify({
            tenantCountryDetails,
          })
        )
      );
    }, 200);

    setTimeout(async () => {
      await channel.publish(
        exchange,
        "tenantIndustyDetails",
        Buffer.from(
          JSON.stringify({
            tenantIndustyDetails,
          })
        )
      );
    }, 300);

    setTimeout(async () => {
      await channel.publish(
        exchange,
        "tenantStateDetails",
        Buffer.from(
          JSON.stringify({
            tenantStateDetails,
          })
        )
      );
    }, 400);

    setTimeout(async () => {
      await channel.publish(
        exchange,
        "tenantOrganisationDetails",
        Buffer.from(
          JSON.stringify({
            tenantOrganisationDetails,
          })
        )
      );
    }, 500);

    setTimeout(async () => {
      await channel.publish(
        exchange,
        "tenantPocDetails",
        Buffer.from(
          JSON.stringify({
            tenantPocDetails,
          })
        )
      );
    }, 600);

    setTimeout(() => {
      channel.publish(
        exchange,
        "tenantOrgAdddressDetails",
        Buffer.from(
          JSON.stringify({
            tenantOrgAdddressDetails,
          })
        )
      );
    }, 700);

    console.log("Data has been sent");

    // return [
    //   tenantOrgAdddressDetails,
    //   tenantOrganisationDetails,
    //   tenantUserDetails,
    //   tenantIndustyDetails,
    //   tenantCountryDetails,
    //   tenantStateDetails,
    // ];

    return tenantUserDetails;
  }
}
