import { PaginateOptions, PaginateResult } from 'mongoose';
export interface Paginate {
  paginate: <T extends Paginate>(
    this: new (...a: any[]) => T,
    query?: any,
    options?: PaginateOptions,
    callback?: (err: any, result: PaginateResult<T>) => void,
  ) => Promise<PaginateResult<T>>;
}
