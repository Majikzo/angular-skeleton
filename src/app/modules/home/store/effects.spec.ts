import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromActions from './actions';
import { TestBed } from '@angular/core/testing';
import { Effects } from './effects';
import { cold, hot } from 'jest-marbles';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeHttpService } from '@core/services/http/home/home-http.service';

jest.mock('@core/services/http/home/home-http.service');

describe('Home Effects', () => {
  let effects: Effects;
  let actions$: Observable<Action>;
  let homeHttpService: HomeHttpService;
  let spyTestStore: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [Effects, provideMockActions(() => actions$), HomeHttpService],
    });

    effects = TestBed.inject(Effects);
    homeHttpService = TestBed.inject(HomeHttpService);

    spyTestStore = jest.spyOn(homeHttpService, 'testStore');
  });

  describe('LoadAction$', () => {
    test('should return a LoadActionSuccess action on success', () => {
      const action = fromActions.LoadAction();
      const outcome = fromActions.LoadActionSuccess({
        payload: {
          state: 'test-state',
        },
      });

      // load action in action stream
      actions$ = hot('-a', { a: action });
      // observable returned from API call
      const response = cold('-a|', { a: { state: 'test-state' } });
      // observable returned from effect
      const expected = cold('--b', { b: outcome });

      spyTestStore.mockReturnValue(response);

      expect(effects.loadAction$).toBeObservable(expected);
    });

    test('should return a LoadActionFail action on error', () => {
      const action = fromActions.LoadAction();
      const outcome = fromActions.LoadActionFail();
      const error = new HttpErrorResponse({});

      // load action in action stream
      actions$ = hot('-a', { a: action });
      // observable returned from API call
      const response = cold('-#|', {}, error);
      // observable returned from effect
      const expected = cold('--b', { b: outcome });

      spyTestStore.mockReturnValue(response);

      expect(effects.loadAction$).toBeObservable(expected);
    });
  });
});
