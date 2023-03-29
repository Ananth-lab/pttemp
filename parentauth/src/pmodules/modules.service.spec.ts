import { Test, TestingModule } from '@nestjs/testing';
import { PmodulesService } from './pmodules.service';

describe('ModulesService', () => {
  let service: PmodulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmodulesService],
    }).compile();

    service = module.get<PmodulesService>(PmodulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
