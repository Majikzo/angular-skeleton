import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { Shallow } from 'shallow-render';
import { AppModule } from './app.module';
import { SUPPORTED_LANGUAGE_DEFAULT } from './config/i18n/custom-translate-loader';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule)
      .provideMock(TranslateService)
      .mock(TranslateService, {
        setDefaultLang: jest.fn(),
        use: jest.fn(),
      });
  });

  it('should create', async () => {
    const component = await shallow.render();

    expect(component).toBeTruthy();
  });

  it('should initialize translations', async () => {
    const { get } = await shallow.render();

    expect(get(TranslateService).setDefaultLang).toHaveBeenCalledWith(SUPPORTED_LANGUAGE_DEFAULT);
    expect(get(TranslateService).use).toHaveBeenCalledWith(SUPPORTED_LANGUAGE_DEFAULT);
  });
});
