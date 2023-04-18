import { Test, TestingModule } from '@nestjs/testing';
import { TenantBranchController } from './tenant_branch.controller';
import { TenantBranchService } from './tenant_branch.service';

describe('TenantBranchController', () => {
  let controller: TenantBranchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantBranchController],
      providers: [TenantBranchService],
    }).compile();

    controller = module.get<TenantBranchController>(TenantBranchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
