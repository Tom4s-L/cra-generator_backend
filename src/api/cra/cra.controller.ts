import { Controller } from '@nestjs/common';
import { CraService } from './cra.service';

@Controller('cra')
export class CraController {
  constructor(private readonly craService: CraService) {}
}
