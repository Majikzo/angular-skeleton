import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HomeHttp } from '@core/services/http/home/home-http.type';
import { HomeHttpServiceMock } from '@core/services/http/home/home-http.service.mock';
import { ActionDTO } from '@shared/models/api/action-dto.model';
import { ApiHttpService } from '@core/services/http/api-http.service';

@Injectable({
  providedIn: 'root',
  useClass: environment.mockServices ? HomeHttpServiceMock : HomeHttpService,
})
export class HomeHttpService implements HomeHttp {
  constructor(private readonly api: ApiHttpService) {
    // Injection
  }

  public testStore(): Observable<ActionDTO> {
    return of({
      state: 'Home admin + template + store',
    }).pipe(delay(1000));
  }
}
