import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, Selectors, State } from '@home/store';

@Injectable({ providedIn: 'root' })
export class HomeSandbox {
  public action$ = this.store.pipe(select(Selectors.selectAction));
  public loadingAction$ = this.store.pipe(select(Selectors.selectLoadingAction));

  constructor(private readonly store: Store<State>) {}

  public loadAction(): void {
    this.store.dispatch(Actions.LoadAction());
  }
}
