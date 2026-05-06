import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { Locale } from './services/locale';

registerLocaleData(localEs,'es'); // es para registrar el idioma español
registerLocaleData(localFr,'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID, // para indicar que queremos la pagina en español
      //useValue: 'es',
      deps:[Locale],
      useFactory: (localeService: Locale) => localeService.getLocale,
    }
  ]
};
