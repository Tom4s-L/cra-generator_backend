export class SuccessResponse <Type = any> {
  public readonly data: Type;

  public readonly paginationToken?: string;

  constructor(data: Type, paginationToken?: string) {
    this.data = data || null;
    this.paginationToken = paginationToken || null;
  }
}
