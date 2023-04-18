import { Test, TestingModule } from '@nestjs/testing';
import { TenantOrganisationService } from './tenant_organisation.service';

describe('TenantOrganisationService', () => {
  let service: TenantOrganisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantOrganisationService],
    }).compile();

    service = module.get<TenantOrganisationService>(TenantOrganisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
