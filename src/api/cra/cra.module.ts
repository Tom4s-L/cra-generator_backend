import { Module } from '@nestjs/common';
import { CraService } from './cra.service';
import { CraController } from './cra.controller';

@Module({
  controllers: [CraController],
  providers: [CraService]
})
export class CraModule {}
