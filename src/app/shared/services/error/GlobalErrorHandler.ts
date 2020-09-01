import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
    constructor(private injector: Injector) {}

    handleError(error: Error | HttpErrorResponse) {
        console.log(`custom errr ${error}`);
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);

        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // server error
            message = errorService.getServerErrorMessage(error);
            // notifier.showError(message);
            stackTrace = error.error.stack ? error.error.stack: '';
        } else {
            // client error
            message = errorService.getClientErrorMessage(error);
            // notifier.showError(message);
            stackTrace = error.stack;
        }
        console.log(message, stackTrace, error.name)
        

        // log errors to backend
        logger.logError(error.name, message, stackTrace);

        // throw error;
    }
}