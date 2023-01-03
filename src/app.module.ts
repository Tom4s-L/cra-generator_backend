import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CraModule } from './api/cra/cra.module';

@Module({
  imports: [CraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
