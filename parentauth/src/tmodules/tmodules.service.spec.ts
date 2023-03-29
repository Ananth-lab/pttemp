import { Test, TestingModule } from '@nestjs/testing';
import { TmodulesService } from './tmodules.service';

describe('TmodulesService', () => {
  let service: TmodulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TmodulesService],
    }).compile();

    service = module.get<TmodulesService>(TmodulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
