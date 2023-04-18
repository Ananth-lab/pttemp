import { Test, TestingModule } from '@nestjs/testing';
import { TenantCountryController } from './tenant_country.controller';
import { TenantCountryService } from './tenant_country.service';

describe('TenantCountryController', () => {
  let controller: TenantCountryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantCountryController],
      providers: [TenantCountryService],
    }).compile();

    controller = module.get<TenantCountryController>(TenantCountryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
