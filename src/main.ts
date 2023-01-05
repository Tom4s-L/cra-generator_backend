import { Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException } from './commons/exceptions/BadRequestException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    validationError: {
      target: false,
    },
    exceptionFactory: (validationErrors: ValidationError[] = []) => new BadRequestException('VALIDATION_ERROR', 'invalid request', validationErrors),
  }));

  await app.listen(3000);
  Logger.log('Starting server on port: 3000');
}
bootstrap();
