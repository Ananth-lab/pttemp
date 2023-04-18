import { Test, TestingModule } from '@nestjs/testing';
import { TenantOrganisationAddressController } from './tenant_organisation_address.controller';
import { TenantOrganisationAddressService } from './tenant_organisation_address.service';

describe('TenantOrganisationAddressController', () => {
  let controller: TenantOrganisationAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantOrganisationAddressController],
      providers: [TenantOrganisationAddressService],
    }).compile();

    controller = module.get<TenantOrganisationAddressController>(TenantOrganisationAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
