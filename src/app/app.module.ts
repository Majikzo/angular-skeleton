import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';

const storeDevtoolsModule = [
  environment.production
    ? StoreDevtoolsModule.instrument({
        logOnly: true,
      })
    : StoreDevtoolsModule.instrument(),
];

const storeConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({}, storeConfig),
    EffectsModule.forRoot([]),
    ...storeDevtoolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
