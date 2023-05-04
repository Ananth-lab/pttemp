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
import { SubscriptionService } from "src/subscription/subscription.service";
import { TmodulesService } from "src/tmodules/tmodules.service";
import { TsubmodulesService } from "src/tmodules/tsubmodules.service";

@Controller("preview")
export class PreviewController {
  constructor(
    private readonly tenantAddress: TenantOrganisationAddressService,
    private readonly tenantPoc: TenantPocService,
    private readonly tenantSubscription : SubscriptionService,
    private readonly tenantModule : TmodulesService,
    private readonly tenantSubModule : TsubmodulesService
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

    //find user's subscription plan
    const tenantSubscriptionDetails = await this.tenantSubscription.findOneByTuserId(tenantUserDetail.id);

    //finding the modules and submodule details using subscription plan
    const modules = tenantSubscriptionDetails.module;
    const tenantModuleDetails = [];
    await Promise.all(modules.map(async (module) => {
      const curr = await this.tenantModule.findOne(module);
      tenantModuleDetails.push(JSON.parse(JSON.stringify(curr)));
    }));

    const submodules = tenantSubscriptionDetails.subModule;
    const tenantSubModuleDetails = [];
    
    await Promise.all(submodules.map(async (submodule) => {
      const curr = await this.tenantSubModule.findOne(submodule);
      tenantSubModuleDetails.push(JSON.parse(JSON.stringify(curr)));
    }));


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

    setTimeout(() => {
      channel.publish(
        exchange,
        "tenantModuleDetails",
        Buffer.from(
          JSON.stringify({
            tenantModuleDetails,
          })
        )
      );
    }, 800);

    setTimeout(() => {
      channel.publish(
        exchange,
        "tenantSubModuleDetails",
        Buffer.from(
          JSON.stringify({
            tenantSubModuleDetails,
          })
        )
      );
    }, 900);


    setTimeout(() => {
      channel.publish(
        exchange,
        "tenantSubscriptionDetails",
        Buffer.from(
          JSON.stringify({
            tenantSubscriptionDetails,
          })
        )
      );
    }, 1000);

    console.log("Data has been sent");
    return tenantUserDetails;
  }
}
