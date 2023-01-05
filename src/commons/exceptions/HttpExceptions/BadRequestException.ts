import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class BadRequestException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.BAD_REQUEST, details);
  }
}
