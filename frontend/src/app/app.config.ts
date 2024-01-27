import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authRoutes } from './auth/auth.routes';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'

registerLocaleData(localeFr,'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouter(authRoutes),
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    importProvidersFrom(HttpClientModule)
  ]
};
