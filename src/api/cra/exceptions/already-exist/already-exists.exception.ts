import { CraException } from '../cra.exception';

interface ErrorContext {
  craId: string;
}

export class CraAlreadyExistException extends CraException {
  constructor(
    context: ErrorContext,
  ) {
    super(CraAlreadyExistException.name, 'A CRA with these start and end dates already exists.', context);
  }
}
