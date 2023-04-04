import { Test, TestingModule } from '@nestjs/testing';
import { TenantPocService } from './tenant_poc.service';

describe('TenantPocService', () => {
  let service: TenantPocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantPocService],
    }).compile();

    service = module.get<TenantPocService>(TenantPocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
