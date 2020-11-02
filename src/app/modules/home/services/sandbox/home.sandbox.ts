import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, Selectors, State } from '@home/store';
import { Observable } from 'rxjs';
import { ActionState } from '@home/store/state.types';

@Injectable({ providedIn: 'root' })
export class HomeSandbox {
  public action$: Observable<ActionState> = this.store.pipe(select(Selectors.selectAction));
  public loadingAction$: Observable<boolean> = this.store.pipe(
    select(Selectors.selectLoadingAction)
  );

  constructor(private readonly store: Store<State>) {
    // Injection
  }

  public loadAction(): void {
    this.store.dispatch(Actions.LoadAction());
  }
}
