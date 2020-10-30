import { TestBed } from '@angular/core/testing';
import { HomeHttpService } from './home-http.service';
import { TestScheduler } from 'rxjs/testing';
import { ApiHttpService } from '@core/services/http/api-http.service';

jest.mock('@core/services/http/api-http.service');

describe('ActiepuntenHttpService', () => {
  let service: HomeHttpService;
  let apiHttpService: ApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHttpService, HomeHttpService],
    });

    service = TestBed.inject(HomeHttpService);
    apiHttpService = TestBed.inject(ApiHttpService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createToken', () => {
    test('testStore', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(({ expectObservable }) => {
        const marbles = '1000ms (a|)';
        const value = { a: { state: 'Home admin + template + store' } };

        expectObservable(service.testStore()).toBe(marbles, value);
      });
    });
  });
});
