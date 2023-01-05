import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CraModule } from './api/cra/cra.module';
import { CraDaysModule } from './api/cra-days/cra-days.module';
import { ConfigModule } from './config/config.module';
import { PostgresDatabaseModule } from './postgres-database/postgres-database.module';

@Module({
  imports: [
    ConfigModule,
    PostgresDatabaseModule,
    CraModule,
    CraDaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
