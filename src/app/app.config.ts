import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000' // Update this URL to match your Node.js server
};
