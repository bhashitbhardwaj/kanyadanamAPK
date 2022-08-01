import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = 'http://kanyadanam.com/';
  //endpoint = 'http://localhost:9000/kanyadanam_framwork/public/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  httpOptionsAuth:any;

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
    ) {
    var userdata:any = this.storage.Get('userData');
    this.httpOptionsAuth = {
      headers: new HttpHeaders(
        { 
          'Content-Type': 'application/json',
          usercode:(userdata)? userdata.uniq_id: ''
        }
      ),
    };
   }

  postData(url,user): Observable<any> {
    return this.httpClient.post(this.endpoint + url, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError('Error occured'))
      );
  }

  postDataWithAuth(url,user): Observable<any> {
    return this.httpClient.post(this.endpoint + url, JSON.stringify(user), this.httpOptionsAuth)
      .pipe(
        catchError(this.handleError('Error occured'))
      );
  }

  getData(id): Observable<any> {
    return this.httpClient.get(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError(`Get user id=${id}`))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
