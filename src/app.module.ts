import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CraModule } from './api/cra/cra.module';
import { CraDaysModule } from './api/cra-days/cra-days.module';
import { CraModule } from './api/cra/cra.module';

@Module({
  imports: [CraModule, CraDaysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
