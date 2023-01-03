import { Test, TestingModule } from '@nestjs/testing';
import { CraDaysController } from './cra-days.controller';
import { CraDaysService } from './cra-days.service';

describe('CraDaysController', () => {
  let controller: CraDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CraDaysController],
      providers: [CraDaysService],
    }).compile();

    controller = module.get<CraDaysController>(CraDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
