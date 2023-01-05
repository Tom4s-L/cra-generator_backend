import { HttpStatus } from '@nestjs/common';
import { HttpException } from './HttpException';

export class InternalServerErrorException extends HttpException {
  constructor(status: string, message: string, details?: any) {
    super(status, message, HttpStatus.INTERNAL_SERVER_ERROR, details);
  }
}
