import { ConflictException } from 'src/commons/exceptions/HttpExceptions/ConflictException';
import { CraAlreadyExistException } from './already-exist/already-exists.exception';

export const mapCraErrorToHttpError = (error: unknown): unknown => {
  if (error instanceof CraAlreadyExistException) {
    throw new ConflictException(
      'CRA_ALREADY_EXIST',
      error.message,
      error.getContext(),
    );
  }

  return null;
};
