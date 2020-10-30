import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HomeHttp } from '@core/services/http/home/home-http.type';
import { ActionDTO } from '@shared/models/api/action-dto.model';

@Injectable()
export class HomeHttpServiceMock implements HomeHttp {
  public testStore(): Observable<ActionDTO> {
    return of({
      state: 'Home admin + template + store',
    }).pipe(delay(1000));
  }
}
