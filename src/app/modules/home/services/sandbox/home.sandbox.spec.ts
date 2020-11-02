import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store';
import { StoreState } from '@store/store.types';
import { cold } from 'jest-marbles';
import { HomeSandbox } from '@home/services/sandbox/home.sandbox';
import { LoadAction } from '@home/store/actions';

// TODO: Fix this test
describe('HomeSandbox', () => {
  let sandbox: HomeSandbox;
  let store: MockStore<StoreState>;
  let dispatchSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeSandbox, provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);
    sandbox = TestBed.inject(HomeSandbox);
    dispatchSpy = jest.spyOn(store, 'dispatch');
  });

  test('should be created', () => {
    expect(sandbox).toBeTruthy();
  });

  describe('action$', () => {
    test('should return the action', () => {
      store.setState({
        home: {
          ...initialState,
          action: {
            placeholderTitle: 'testState',
          },
          loadingAction: false,
        },
      });

      const expected$ = cold('a', { a: { placeholderTitle: 'testState' } });

      expect(sandbox.action$).toBeObservable(expected$);
    });
  });

  describe('loadingAction$', () => {
    test('should return the loading state', () => {
      store.setState({
        home: {
          ...initialState,
          loadingAction: true,
        },
      });

      const expected$ = cold('a', { a: true });

      expect(sandbox.loadingAction$).toBeObservable(expected$);
    });
  });

  describe('LoadAction', () => {
    test('should dispatch the LoadAction action', () => {
      sandbox.loadAction();

      expect(dispatchSpy).toHaveBeenCalledWith(LoadAction());
    });
  });
});
