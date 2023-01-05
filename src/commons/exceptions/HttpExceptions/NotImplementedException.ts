import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class NotImplementedException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.NOT_IMPLEMENTED, details);
  }
}
