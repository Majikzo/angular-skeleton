import * as Actions from './actions';
import { expectAction } from '@store/test/common.actions';

describe('Preventiecheck Actions', () => {
  describe('LoadAction', () => {
    it('can create', () => {
      expectAction(() => Actions.LoadAction(), 'LOAD_ACTION');
    });
  });

  describe('LoadActionSuccess', () => {
    it('can create', () => {
      expectAction(payload => Actions.LoadActionSuccess({ payload }), 'LOAD_ACTION_SUCCESS', {
        state: 'test',
      });
    });
  });

  describe('LoadActionFail', () => {
    it('can create', () => {
      expectAction(() => Actions.LoadActionFail(), 'LOAD_ACTION_FAIL');
    });
  });
});
