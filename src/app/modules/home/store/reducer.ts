import * as Actions from './actions';
import { initialState, State } from './state';
import { Action, createReducer, on } from '@ngrx/store';

const featureReducer = createReducer(
  initialState,
  on(Actions.LoadAction, state => ({
    ...state,
    action: undefined,
    loadingAction: true,
  })),
  on(Actions.LoadActionSuccess, (state, action) => ({
    ...state,
    action: { placeholderTitle: action.payload.state },
    loadingAction: false,
  })),
  on(Actions.LoadActionFail, state => ({
    ...state,
    action: undefined,
    loadingAction: false,
  }))
);

export function Reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
