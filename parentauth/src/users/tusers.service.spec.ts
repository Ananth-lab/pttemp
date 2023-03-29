import { Test, TestingModule } from '@nestjs/testing';
import { TusersService } from './tusers.service';

describe('TusersService', () => {
  let service: TusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TusersService],
    }).compile();

    service = module.get<TusersService>(TusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
