import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {async, TestBed, waitForAsync} from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { ApiHttpService } from './api-http.service';

describe('ApiHttpService', () => {
  let apiHttpService: ApiHttpService;
  let httpTestingController: HttpTestingController;

  const testRequestBody = {
    body: 'request',
  };
  const testResponseBody = {
    body: 'response',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });

    apiHttpService = TestBed.inject(ApiHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  test('should be created', () => {
    expect(apiHttpService).toBeTruthy();
  });

  describe('get', () => {
    test('should perform API call', (done) => {
      apiHttpService.get('foo/bar').subscribe((response) => {
        expect(response).toEqual(testResponseBody);

        done();
      });

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.method).toBe('GET');
      expect(call.request.body).toBe(null);
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add query parameters to the request', (done) => {
      apiHttpService
        .get('foo/bar', {
          params: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(
        `${environment.api}foo/bar?foo=bar&lorem=ipsum`
      );
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add headers to the request', (done) => {
      apiHttpService
        .get('foo/bar', {
          headers: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.headers.get('foo')).toBe('bar');
      expect(call.request.headers.get('lorem')).toBe('ipsum');
      call.flush(testResponseBody);
      httpTestingController.verify();
    });
  });

  describe('post', () => {
    test('should perform API call', (done) => {
      apiHttpService.post('foo/bar').subscribe((response) => {
        expect(response).toEqual(testResponseBody);

        done();
      });

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.method).toBe('POST');
      expect(call.request.body).toBe(null);
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add query parameters to the request', (done) => {
      apiHttpService
        .post('foo/bar', testRequestBody, {
          params: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(
        `${environment.api}foo/bar?foo=bar&lorem=ipsum`
      );
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add headers to the request', (done) => {
      apiHttpService
        .post('foo/bar', testRequestBody, {
          headers: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.headers.get('foo')).toBe('bar');
      expect(call.request.headers.get('lorem')).toBe('ipsum');
      call.flush(testResponseBody);
      httpTestingController.verify();
    });
  });

  describe('put', () => {
    test('should perform API call', (done) => {
      apiHttpService.put('foo/bar').subscribe((response) => {
        expect(response).toEqual(testResponseBody);

        done();
      });

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.method).toBe('PUT');
      expect(call.request.body).toBe(null);
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add query parameters to the request', (done) => {
      apiHttpService
        .put('foo/bar', testRequestBody, {
          params: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(
        `${environment.api}foo/bar?foo=bar&lorem=ipsum`
      );
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add headers to the request', (done) => {
      apiHttpService
        .put('foo/bar', testRequestBody, {
          headers: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.headers.get('foo')).toBe('bar');
      expect(call.request.headers.get('lorem')).toBe('ipsum');
      call.flush(testResponseBody);
      httpTestingController.verify();
    });
  });

  describe('delete', () => {
    test('should perform API call', (done) => {
      apiHttpService.delete('foo/bar').subscribe((response) => {
        expect(response).toEqual(testResponseBody);

        done();
      });

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.method).toBe('DELETE');
      expect(call.request.body).toBe(null);
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add query parameters to the request', (done) => {
      apiHttpService
        .delete('foo/bar', {
          params: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(
        `${environment.api}foo/bar?foo=bar&lorem=ipsum`
      );
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add headers to the request', (done) => {
      apiHttpService
        .delete('foo/bar', {
          headers: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.headers.get('foo')).toBe('bar');
      expect(call.request.headers.get('lorem')).toBe('ipsum');
      call.flush(testResponseBody);
      httpTestingController.verify();
    });
  });

  describe('patch', () => {
    test('should perform API call', (done) => {
      apiHttpService.patch('foo/bar').subscribe((response) => {
        expect(response).toEqual(testResponseBody);

        done();
      });

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.method).toBe('PATCH');
      expect(call.request.body).toBe(null);
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add query parameters to the request', (done) => {
      apiHttpService
        .patch('foo/bar', testRequestBody, {
          params: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(
        `${environment.api}foo/bar?foo=bar&lorem=ipsum`
      );
      call.flush(testResponseBody);
      httpTestingController.verify();
    });

    test('should add headers to the request', (done) => {
      apiHttpService
        .patch('foo/bar', testRequestBody, {
          headers: {
            foo: 'bar',
            lorem: 'ipsum',
          },
        })
        .subscribe(() => done());

      const call = httpTestingController.expectOne(`${environment.api}foo/bar`);
      expect(call.request.headers.get('foo')).toBe('bar');
      expect(call.request.headers.get('lorem')).toBe('ipsum');
      call.flush(testResponseBody);
      httpTestingController.verify();
    });
  });
});
