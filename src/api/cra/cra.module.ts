import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CraService } from './cra.service';
import { CraController } from './cra.controller';
import { Cra } from './entities/cra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cra])],
  controllers: [CraController],
  providers: [CraService],
})
export class CraModule {}
