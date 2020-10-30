import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpOptions } from './api-http.type';

@Injectable()
export class ApiHttpServiceMock {
  public get<T>(url: string, options?: HttpOptions): Observable<T> {
    return of();
  }

  public post<T>(url: string, body?: any, options?: HttpOptions): Observable<T> {
    return of();
  }

  public put<T>(url: string, body?: any, options?: HttpOptions): Observable<T> {
    return of();
  }

  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return of();
  }

  public patch<T>(url: string, body?: any, options?: HttpOptions): Observable<T> {
    return of();
  }

  public redirectTo(url: string): void {}
}
