import { Test, TestingModule } from '@nestjs/testing';
import { TusersController } from './tusers.controller';

describe('TusersController', () => {
  let controller: TusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TusersController],
    }).compile();

    controller = module.get<TusersController>(TusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
