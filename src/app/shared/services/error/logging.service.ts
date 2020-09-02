  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    constructor(private http: HttpClient) {}
    logError(name: string, message: string, stack: string) {
        // Send errors to server here
        console.log('LoggingService: ' + message);
        this.http.post('https://localhost:44358/api/logs', {appName: 'Map My Property', name: name, message: message, stack: stack})
        .subscribe();
    }
}