import HttpStatusCodes from '../constants/http-status';
import ExtendableError from './base-error';

class APIError extends ExtendableError {
  constructor(
    error: { message: string; code: number } | string,
    status: HttpStatusCodes = HttpStatusCodes.INTERNAL_SERVER_ERROR,
  ) {
    super(error, status);
  }
}

export { APIError };
