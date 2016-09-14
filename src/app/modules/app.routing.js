'use strict';

import { RouterModule, Routes } from '@angular/router';

const routes = [
    { path: '',  redirectTo: 'work', pathMatch: 'full' },
    { path: 'work',  loadChildren: '/app/modules/portfolio/portfolio.module' },
    { path: 'about',  loadChildren: '/app/modules/about/about.module' },
    { path: 'moodboard',  loadChildren: '/app/modules/moodboard/moodboard.module' },
    { path: 'thoughts',  redirectTo: 'work', pathMatch: 'full' }
];

export const routingProviders = [];

export const RoutingModuleWithProviders = RouterModule.forRoot(routes);
