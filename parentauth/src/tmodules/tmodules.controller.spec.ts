import { Test, TestingModule } from '@nestjs/testing';
import { TmodulesController } from './tmodules.controller';

describe('TmodulesController', () => {
  let controller: TmodulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TmodulesController],
    }).compile();

    controller = module.get<TmodulesController>(TmodulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
