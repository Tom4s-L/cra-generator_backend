import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class ForbiddenException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.FORBIDDEN, details);
  }
}
