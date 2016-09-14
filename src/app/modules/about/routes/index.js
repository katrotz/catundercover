'use strict';

import { RouterModule } from '@angular/router';

import AboutComponent from './../components/about/about.component';

const routes = [
    { path: '',  component: AboutComponent }
];

export const routingProviders = [];

export const RoutingModuleWithProviders = RouterModule.forChild(routes);
