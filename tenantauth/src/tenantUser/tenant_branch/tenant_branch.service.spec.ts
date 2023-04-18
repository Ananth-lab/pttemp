import { Test, TestingModule } from '@nestjs/testing';
import { TenantBranchService } from './tenant_branch.service';

describe('TenantBranchService', () => {
  let service: TenantBranchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantBranchService],
    }).compile();

    service = module.get<TenantBranchService>(TenantBranchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
