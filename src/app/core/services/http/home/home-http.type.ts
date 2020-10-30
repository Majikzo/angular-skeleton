import { Observable } from 'rxjs';
import { ActionDTO } from '@shared/models/api/action-dto.model';

export interface HomeHttp {
  testStore(): Observable<ActionDTO>;
}
