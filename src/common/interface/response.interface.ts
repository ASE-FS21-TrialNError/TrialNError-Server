export interface IResponse<T> {
  success: boolean;
  payload?: T;
  error?: string;
  message?: string;
  errorMessage?: string;
  errorCode?: number;
}
