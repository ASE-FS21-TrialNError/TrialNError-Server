import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { AppException } from '../exception/app.exception';
import { ResponseError } from '../dto/response.dto';

@Catch(AppException)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: AppException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const responseBody = new ResponseError<void>(
      exception.errorCode,
      exception.error,
      exception.message,
    );
    response.status(exception.status).json(responseBody);
  }
}
