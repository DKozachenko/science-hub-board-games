import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ru_RU, provideNzI18n } from 'ng-zorro-antd/i18n';
import { routes } from '../routes/app.routes';

registerLocaleData(ru);

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideNzI18n(ru_RU)],
};
