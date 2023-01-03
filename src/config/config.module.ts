import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { PostgresConfig } from './postgres.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => ({ postgres: PostgresConfig() }),
      ],
    }),
  ],
})
export class ConfigModule {}
