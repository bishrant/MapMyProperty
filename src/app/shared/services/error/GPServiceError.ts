// export function TraceGPError (url: string, gpInfo: any): any {
//   const stack = 'Not Available';
//   if (gpInfo.message.length > 0) {
//     this.stack = gpInfo.messages.reduce((acc: any, cur: any) => acc + '\n\n' + cur.description);
//   }
//   const message = `GPService failed for url: ${url} \n\n jobID: ${gpInfo.jobId}`;

//   return {
//     name: 'GPError',
//     level: 'Severe',
//     message: message,
//     stackTrace: stack,
//     toString: function () { return this.name + ': ' + this.message; }
//   };
// }

export class MMPGPServiceError extends Error {
  public userMsg: string;
  public stackTrace = 'No stack Available';
  constructor (userMsg: string = 'An error occurred', ...params) {
    super(...params);
    this.userMsg = userMsg;
    this.name = 'MMPCustomError';
    // if (gpInfo.message) {
    //   if (gpInfo.message.length > 0) {
    //     this.stackTrace = gpInfo.messages.reduce((acc: any, cur: any) => acc + '\n\n' + cur.description);
    //   }
    // }
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