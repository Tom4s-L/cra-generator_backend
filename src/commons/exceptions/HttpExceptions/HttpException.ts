import { HttpException as NestHttpException } from '@nestjs/common';

type ErrorBody = {
  status: string,
  message: string,
  code: number,
  details?: any,
};

export class HttpException extends NestHttpException {
  constructor(status: string, message: string, code: number, details?: any) {
    super(HttpException.createBody(status, message, code, details), code);
  }

  static createBody(status: string, message: string, code: number, details?: any): ErrorBody {
    return {
      status,
      message,
      code,
      details,
    };
  }
}
