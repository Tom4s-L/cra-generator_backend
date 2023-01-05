import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class UnauthorizedException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.UNAUTHORIZED, details);
  }
}
