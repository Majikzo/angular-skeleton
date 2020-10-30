import { ActionState } from './state.types';

export interface State {
  action: ActionState;
  loadingAction: boolean;
}

export const initialState: State = {
  action: undefined,
  loadingAction: false,
};
