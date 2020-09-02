
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    constructor(private http: HttpClient, private config: AppConfiguration) { }
    logError(name: string, message: string, stack: string) {
        // Send errors to server here
        this.http.post(this.config.loggingURL, { appName: 'Map My Property', name: name, message: message, stack: stack })
            .subscribe();
    }
}