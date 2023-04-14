import { Test, TestingModule } from '@nestjs/testing';
import { IndustryDomainService } from './industry_domain.service';

describe('IndustryDomainService', () => {
  let service: IndustryDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndustryDomainService],
    }).compile();

    service = module.get<IndustryDomainService>(IndustryDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
