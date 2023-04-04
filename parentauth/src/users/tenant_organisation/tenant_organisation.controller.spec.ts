import { Test, TestingModule } from '@nestjs/testing';
import { TenantOrganisationController } from './tenant_organisation.controller';
import { TenantOrganisationService } from './tenant_organisation.service';

describe('TenantOrganisationController', () => {
  let controller: TenantOrganisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantOrganisationController],
      providers: [TenantOrganisationService],
    }).compile();

    controller = module.get<TenantOrganisationController>(TenantOrganisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
