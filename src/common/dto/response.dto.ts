import { IResponse } from '../interface/response.interface';
export class ResponseSuccess<T> implements IResponse<T> {
  constructor(public message: string, public payload?: T) {
    this.success = true;
  }
  success: boolean;
  error?: any;
  errorMessage?: string;
}

// tslint:disable-next-line: max-classes-per-file
export class ResponseError<T> implements IResponse<T> {
  constructor(
    public errorCode: number,
    public error: string,
    public errorMessage: string,
  ) {
    this.success = false;
  }
  success: boolean;
  payload?: T;
  message?: string;
}
