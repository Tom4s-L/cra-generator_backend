import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class ConflictException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.CONFLICT, details);
  }
}
