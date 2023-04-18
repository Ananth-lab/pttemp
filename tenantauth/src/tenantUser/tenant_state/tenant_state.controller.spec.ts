import { Test, TestingModule } from '@nestjs/testing';
import { TenantStateController } from './tenant_state.controller';
import { TenantStateService } from './tenant_state.service';

describe('TenantStateController', () => {
  let controller: TenantStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantStateController],
      providers: [TenantStateService],
    }).compile();

    controller = module.get<TenantStateController>(TenantStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
