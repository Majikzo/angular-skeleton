import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguages } from './config/i18n/custom-translate-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-skeleton';

  constructor(private translateService: TranslateService) {
    // Injection
  }

  public ngOnInit(): void {
    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.setDefaultLang(SupportedLanguages.EN);
    this.translateService.use(SupportedLanguages.EN);
  }
}
