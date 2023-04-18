import { Test, TestingModule } from '@nestjs/testing';
import { TenantOrganisationAddressService } from './tenant_organisation_address.service';

describe('TenantOrganisationAddressService', () => {
  let service: TenantOrganisationAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantOrganisationAddressService],
    }).compile();

    service = module.get<TenantOrganisationAddressService>(TenantOrganisationAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
