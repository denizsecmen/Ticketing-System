import { CustomError } from './custom-error';
export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;
  constructor() {
    super('Not auth.');
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: 'Not auth.' }];
  }
}
