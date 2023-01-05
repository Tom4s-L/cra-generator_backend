import { instanceToPlain } from 'class-transformer';

export abstract class BaseError extends Error {
  protected context: Record<string, any>;

  getContext(): Record<string, any> {
    return this.context;
  }

  constructor(
    name: string,
    message: string,
    context?: unknown,
  ) {
    super(message);
    this.name = name;
    this.context = instanceToPlain(context, {
      enableCircularCheck: true,
    });
  }
}
