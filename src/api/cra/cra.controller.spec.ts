import { Test, TestingModule } from '@nestjs/testing';
import { CraController } from './cra.controller';
import { CraService } from './cra.service';

describe('CraController', () => {
  let controller: CraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CraController],
      providers: [CraService],
    }).compile();

    controller = module.get<CraController>(CraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
