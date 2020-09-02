import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }

    handleError(error: any) {
        // console.log(`custom errr ${error}`);
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);

        let message;
        let stackTrace;
        let errorName = error.name;
        if (error instanceof HttpErrorResponse) {
            // server error
            message = errorService.getServerErrorMessage(error);
            // notifier.showError(message);
            stackTrace = error.error.stack ? error.error.stack : 'Not Available';
            stackTrace = stackTrace.replace(/\n/gi, '\n\n');
        } else {
            // client error
            if (typeof error.rejection !== 'undefined') {
                message = error.rejection.message;
                stackTrace = error.rejection.stackTrace;
                errorName = error.rejection.name;
            } else {
                message = errorService.getClientErrorMessage(error);
                // notifier.showError(message);
                stackTrace = error.stack.replace(/\n/gi, '\n\n');
            }
        }

        // log errors to backend
        logger.logError(errorName, message, stackTrace);
        console.error(error);
    }
}