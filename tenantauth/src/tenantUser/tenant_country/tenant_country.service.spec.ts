import { Test, TestingModule } from '@nestjs/testing';
import { TenantCountryService } from './tenant_country.service';

describe('TenantCountryService', () => {
  let service: TenantCountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantCountryService],
    }).compile();

    service = module.get<TenantCountryService>(TenantCountryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
