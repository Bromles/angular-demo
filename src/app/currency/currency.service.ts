import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    constructor(private httpClient: HttpClient) {
    }

    getData(): Observable<any> {
        return this.httpClient.get('assets/currency.json').pipe(
            tap(_ => console.log('currency fetched')),
            catchError(this.handleError('getCurrency', [])),
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            console.error(`${ operation } failed: ${ error.message }`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
