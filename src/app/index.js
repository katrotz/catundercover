'use strict';

import { Component, View, enableProdMode, ViewEncapsulation } from '@angular/core';
import { bootstrap as ngBootstrapBrowser } from '@angular/platform-browser-dynamic'
import { provideStore } from '@ngrx/store';

import { reducers, state } from './reducers/index';
import APP_ROUTER_PROVIDERS from './routes/index';
import CatUndercoverComponent from './components/catundercover/catundercover.component';

export function run() {
    // enableProdMode();

    return ngBootstrapBrowser(
        CatUndercoverComponent,
        [
            APP_ROUTER_PROVIDERS,
            provideStore(reducers, state)
        ]
    );
}
