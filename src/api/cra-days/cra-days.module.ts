import { Module } from '@nestjs/common';
import { CraDaysService } from './cra-days.service';
import { CraDaysController } from './cra-days.controller';

@Module({
  controllers: [CraDaysController],
  providers: [CraDaysService],
})
export class CraDaysModule {}
