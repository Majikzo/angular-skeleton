import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export enum SupportedLanguages {
  EN = 'en',
}

export const SUPPORTED_LANGUAGE_DEFAULT: SupportedLanguages = SupportedLanguages.EN;

export class TranslateHttpLoader implements TranslateLoader {
  private loadedLanguage: SupportedLanguages;
  private loadedTranslations$: Observable<object>;

  constructor(private http: HttpClient, private prefix: string, private suffix: string) {}

  public getTranslation(languages: SupportedLanguages): Observable<object> {
    if (!languages || !Object.keys(SupportedLanguages).includes(languages.toUpperCase())) {
      languages = SUPPORTED_LANGUAGE_DEFAULT;
    }

    if (this.loadedLanguage !== languages) {
      this.loadedLanguage = languages;
      this.loadedTranslations$ = this.http
        .get(`${this.prefix}${languages}${this.suffix}`)
        .pipe(shareReplay(1));
    }

    return this.loadedTranslations$;
  }
}

export function CustomTranslateLoaderFactory(
  httpClient: HttpClient,
  locationStrategy: LocationStrategy
): TranslateLoader {
  return new TranslateHttpLoader(
    httpClient,
    `${locationStrategy.getBaseHref()}assets/i18n/`,
    '.ts'
  );
}
