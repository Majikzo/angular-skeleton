import { initialState, State } from './state';
import * as fromActions from './actions';
import { Reducer } from './reducer';

describe('Home Reducer', () => {
  let initialTestState: State;

  beforeEach(() => {
    initialTestState = initialState;
  });

  test('should react on LoadAction', () => {
    const action = fromActions.LoadAction();

    const state = Reducer(initialState, action);

    expect(state).toStrictEqual({
      ...initialState,
      action: undefined,
      loadingAction: true,
    });
  });

  test('should react on LoadActionSuccess', () => {
    const action = fromActions.LoadActionSuccess({
      payload: {
        state: 'testState',
      },
    });
    const state = Reducer(initialState, action);

    expect(state).toStrictEqual({
      ...initialState,
      action: {
        placeholderTitle: 'testState',
      },
      loadingAction: false,
    });
  });

  test('should react on LoadActionFail', () => {
    const action = fromActions.LoadActionFail();
    const stateBefore = {
      ...initialTestState,
      action: {
        placeholderTitle: 'testState',
      },
      loadingAction: true,
    };

    const state = Reducer(stateBefore, action);

    expect(state).toStrictEqual({
      ...initialState,
      action: undefined,
      loadingAction: false,
    });
  });
});
