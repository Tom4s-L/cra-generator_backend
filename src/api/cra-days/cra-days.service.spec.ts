import { Test, TestingModule } from '@nestjs/testing';
import { CraDaysService } from './cra-days.service';

describe('CraDaysService', () => {
  let service: CraDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CraDaysService],
    }).compile();

    service = module.get<CraDaysService>(CraDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
