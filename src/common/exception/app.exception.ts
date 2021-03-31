export class AppException extends Error {
  errorCode: number;
  error: string;
  status: number; // Http Status
  constructor(appError: AppErrorCode) {
    super(appError.message);
    this.errorCode = appError.errorCode;
    this.error = appError.error;
    this.status = appError.status ?? 200;
  }
}
