import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor (private injector: Injector) { }

  handleError (error: any) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);
    let sendLog = false;
    let message;
    let stackTrace;
    let errorName = error.name;
    if (/Uncaught \(in promise\): MMPCustomError?/.test(error.message)) {
      if (error.rejection) {
        notifier.showError(error.rejection.userMsg);
        stackTrace = error.rejection.stackTrace;
        message = error.rejection.userMsg;
        sendLog = true;
      }
    }
    if (errorName === 'MMPCustomError') {
      notifier.showError(error.userMsg);
      stackTrace = error.stackTrace;
      message = error.userMsg;
    } else {
      if (error instanceof HttpErrorResponse) {
        // server error
        message = errorService.getServerErrorMessage(error);
        // notifier.showError(message);
        stackTrace = error.error.stack ? error.error.stack : 'Not Available';
        stackTrace = stackTrace.replace(/\n/gi, '\n\n');
        sendLog = true;
      } else {
        // client error
        if (typeof error.rejection !== 'undefined') {
          message = error.rejection.message;
          stackTrace = error.rejection.stackTrace;
          errorName = error.rejection.name;
        } else {
          message = errorService.getClientErrorMessage(error);
          // notifier.showError(message);
          stackTrace = error.stack ? error.stack.replace(/\n/gi, '\n\n') : 'Not Available';
        }
      }
    }

    // log errors to backend
    logger.logError(errorName, message, stackTrace);
    // debugger;
    console.error(error);
  }
}
