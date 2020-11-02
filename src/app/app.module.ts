import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { LocationStrategy, registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoaderFactory } from './config/i18n/custom-translate-loader';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

registerLocaleData(localeEn, 'nl');

const storeDevtoolsModule = environment.production
  ? StoreDevtoolsModule.instrument({ logOnly: true })
  : StoreDevtoolsModule.instrument();

const storeConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    EffectsModule.forRoot([]),
    SharedModule,
    StoreModule.forRoot({}, storeConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CustomTranslateLoaderFactory,
        deps: [HttpClient, LocationStrategy],
      },
      defaultLanguage: 'en',
    }),
    ...[storeDevtoolsModule],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
