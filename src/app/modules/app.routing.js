'use strict';

import { RouterModule, Routes } from '@angular/router';

import ThoughtsComponent from './core/components/thoughts/thoughts.component';

const routes = [
    { path: '',  redirectTo: 'work', pathMatch: 'full' },
    { path: 'work',  loadChildren: '/app/modules/portfolio/portfolio.module' },
    { path: 'about',  loadChildren: '/app/modules/about/about.module' },
    { path: 'moodboard',  loadChildren: '/app/modules/moodboard/moodboard.module' },
    { path: 'thoughts',  component: ThoughtsComponent }
];

export const routingProviders = [];

export const RoutingModuleWithProviders = RouterModule.forRoot(routes);
