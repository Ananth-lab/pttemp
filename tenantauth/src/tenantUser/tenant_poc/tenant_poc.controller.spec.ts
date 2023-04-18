import { Test, TestingModule } from '@nestjs/testing';
import { TenantPocController } from './tenant_poc.controller';
import { TenantPocService } from './tenant_poc.service';

describe('TenantPocController', () => {
  let controller: TenantPocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantPocController],
      providers: [TenantPocService],
    }).compile();

    controller = module.get<TenantPocController>(TenantPocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
