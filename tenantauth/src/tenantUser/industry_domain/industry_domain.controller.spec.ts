import { Test, TestingModule } from '@nestjs/testing';
import { IndustryDomainController } from './industry_domain.controller';
import { IndustryDomainService } from './industry_domain.service';

describe('IndustryDomainController', () => {
  let controller: IndustryDomainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndustryDomainController],
      providers: [IndustryDomainService],
    }).compile();

    controller = module.get<IndustryDomainController>(IndustryDomainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
