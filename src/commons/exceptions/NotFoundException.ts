import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class NotFoundException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.NOT_FOUND, details);
  }
}
