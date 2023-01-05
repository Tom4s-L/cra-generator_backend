import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CraService } from './cra.service';
import { CraController } from './cra.controller';
import { Cra } from './entities/cra.entity';
import { CraDay } from '../cra-days/entities/cra-day.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Cra,
    CraDay,
  ])],
  controllers: [CraController],
  providers: [CraService],
})
export class CraModule {}
