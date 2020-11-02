import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CustomTranslateLoaderFactory, SupportedLanguages } from './custom-translate-loader';
import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomTranslateLoader', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create a translation loader', () => {
    const createdLoader = CustomTranslateLoaderFactory(
      TestBed.get(HttpClient),
      TestBed.get(LocationStrategy)
    );
    expect(createdLoader).toBeTruthy();
  });

  it('should load translation', done => {
    const loader = CustomTranslateLoaderFactory(
      TestBed.get(HttpClient),
      TestBed.get(LocationStrategy)
    );
    const translations = { foo: 'bar' };

    loader.getTranslation(SupportedLanguages.EN).subscribe(value => {
      expect(value).toBe(translations);
      done();
    });

    const req = httpTestingController.expectOne('/assets/i18n/en.ts');
    req.flush(translations);
  });

  it('should set language to default when undefined', done => {
    const loader = CustomTranslateLoaderFactory(
      TestBed.get(HttpClient),
      TestBed.get(LocationStrategy)
    );
    const translations = { foo: 'bar' };

    loader.getTranslation(undefined).subscribe(value => {
      expect(value).toBe(translations);
      done();
    });

    const req = httpTestingController.expectOne('/assets/i18n/en.ts');
    req.flush(translations);
  });
});
