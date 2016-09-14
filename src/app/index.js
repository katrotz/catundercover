'use strict';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import AppModule from './modules/app.module';

export function run() {
    enableProdMode();

    return platformBrowserDynamic()
        .bootstrapModule(AppModule);
}
