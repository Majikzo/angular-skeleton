import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from './actions';
import { of } from 'rxjs';
import { HomeHttpService } from '@core/services/http/home/home-http.service';

@Injectable()
export class Effects {
  constructor(
    private readonly actions$: Actions,
    private readonly homeHttpService: HomeHttpService
  ) {}

  public loadAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LoadAction),
      switchMap(() =>
        this.homeHttpService.testStore().pipe(
          map(actieDTO =>
            fromActions.LoadActionSuccess({
              payload: { state: actieDTO.state },
            })
          ),
          catchError(() => of(fromActions.LoadActionFail()))
        )
      )
    )
  );
}
