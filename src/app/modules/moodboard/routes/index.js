'use strict';

import { RouterModule } from '@angular/router';

import MoodboardComponent from './../components/moodboard/moodboard.component';

const routes = [
    { path: '',  component: MoodboardComponent }
];

export const routingProviders = [];

export const RoutingModuleWithProviders = RouterModule.forChild(routes);
