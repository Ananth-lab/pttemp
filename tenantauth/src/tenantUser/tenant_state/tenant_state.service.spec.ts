import { Test, TestingModule } from '@nestjs/testing';
import { TenantStateService } from './tenant_state.service';

describe('TenantStateService', () => {
  let service: TenantStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantStateService],
    }).compile();

    service = module.get<TenantStateService>(TenantStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
