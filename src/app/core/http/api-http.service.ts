import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpOptions} from './api-http.type';

@Injectable({providedIn: 'root'})
export class ApiHttpService {
  private static readonly DEFAULT_HTTP_OPTIONS = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {},
  };

  private readonly baseUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = environment.api;
  }

  public get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${url}`, this.getHttpOptions(options));
  }

  public post<T>(url: string, body?: any, options?: HttpOptions): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}${url}`, body, this.getHttpOptions(options));
  }

  public put<T>(url: string, body?: any, options?: HttpOptions): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}${url}`, body, this.getHttpOptions(options));
  }

  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}${url}`, this.getHttpOptions(options));
  }

  public patch<T>(url: string, body?: any, options?: HttpOptions): Observable<T> {
    return this.httpClient.patch<T>(`${this.baseUrl}${url}`, body, this.getHttpOptions(options));
  }

  public redirectTo(url: string): void {
    window.location.href = `${this.baseUrl}${url}`;
  }

  private getHttpOptions(options: HttpOptions = {}): HttpOptions {
    return {
      ...ApiHttpService.DEFAULT_HTTP_OPTIONS,
      headers: new HttpHeaders({
        ...ApiHttpService.DEFAULT_HTTP_OPTIONS.headers,
        ...options.headers,
      }),
      params: {
        ...ApiHttpService.DEFAULT_HTTP_OPTIONS.params,
        ...options.params,
      },
    };
  }
}
