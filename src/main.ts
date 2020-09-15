/// <reference types="arcgis-js-api" />
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppConfiguration } from './config';

if (environment.production) {
  enableProdMode();
}

// Load configuration that is external from build
fetch('./assets/config.json').then(async res => {
  const configuration = await res.json();

  platformBrowserDynamic([
    { provide: AppConfiguration, useValue: configuration },
  ])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
