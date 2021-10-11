export class MMPGPServiceError extends Error {
  public userMsg: string;
  public stackTrace = 'No stack Available';
  constructor (userMsg: string = 'An error occurred', ...params) {
    super(...params);
    this.userMsg = userMsg;
    this.name = 'MMPCustomError';
  }
}

export function TraceMMPError (userMsg: string, message: any, stack: string = 'Not Available'): any {
  return {
    name: 'MMPCustomError',
    level: 'Severe',
    userMsg: userMsg,
    message: message,
    stackTrace: stack,
    toString: function () { return this.name + ': ' + this.message; }
  };
}
