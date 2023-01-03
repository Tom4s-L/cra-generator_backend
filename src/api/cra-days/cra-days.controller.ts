import { Controller } from '@nestjs/common';
import { CraDaysService } from './cra-days.service';

@Controller('cra-days')
export class CraDaysController {
  constructor(private readonly craDaysService: CraDaysService) {}
}
