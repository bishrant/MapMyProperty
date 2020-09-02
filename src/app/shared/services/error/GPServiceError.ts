export function TraceGPError(url: string, gpInfo: any): any {
    let stack = gpInfo.messages.reduce((acc: any, cur: any) => acc + "\n\n" + cur.description);
    let message = `GPService failed for url: ${url} \n\n jobID: ${gpInfo.jobId}`;

    return {
        name: "GPError",
        level: "Severe",
        message: message,
        stackTrace: stack,
        toString: function () { return this.name + ": " + this.message; }
    };
}