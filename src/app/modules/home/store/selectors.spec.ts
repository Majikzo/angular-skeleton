import * as fromSelectors from './selectors';

describe('Home selectors', () => {
  describe('selectAction', () => {
    test('should select the action', () => {
      const state = {
        action: { placeholderTitle: 'Hello World' },
      };

      expect(fromSelectors.selectAction.projector(state)).toBe(state.action);
    });
  });

  describe('selectLoadingAction', () => {
    test('should select the loading state', () => {
      const state = {
        loadingAction: true,
      };

      expect(fromSelectors.selectLoadingAction.projector(state)).toBe(state.loadingAction);
    });
  });
});
