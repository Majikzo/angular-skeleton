import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

export const selectHomeState = createFeatureSelector<State>('preventiecheck');

export const selectAction = createSelector(selectHomeState, (state: State) => state.action);

export const selectLoadingAction = createSelector(
  selectHomeState,
  (state: State) => state.loadingAction
);
