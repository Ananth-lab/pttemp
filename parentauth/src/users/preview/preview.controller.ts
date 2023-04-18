import { Controller, Get,Post } from '@nestjs/common';
import { IndustryDomainService } from '../industry_domain/industry_domain.service';
import { TenantOrganisationService } from '../tenant_organisation/tenant_organisation.service';

@Controller('preview')
export class PreviewController {
  constructor(
    private readonly domain:IndustryDomainService ,
    private readonly organisation: TenantOrganisationService
  ) {}

  @Get()
  async getPreviewData() {
    try {
      // Use the respective service classes to fetch data from different tables
      const tenanIndustryDomain = await this.domain.findOne("id");
      const tenantOrganisation = await this.organisation.findOne("id");

      // Merge the fetched data and send it in the API response
      return { tenanIndustryDomain,tenantOrganisation };
    } catch (error) {
      throw new Error(`Error fetching preview data: ${error.message}`);
    }
  }

  @Post()
  async finalSubmit(){}
}
