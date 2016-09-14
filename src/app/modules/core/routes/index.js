'use strict';

import { RouterModule } from '@angular/router';

const routes = [
    // { path: '',  component: AboutComponent },
    // { path: 'work',  component: AboutComponent },
    // { path: 'work/:workId',  component: AboutComponent },
    // { path: 'about',  component: AboutComponent },
    // { path: 'moodboard',  component: AboutComponent },
    // { path: 'thoughts',  component: AboutComponent }
];

export const routingProviders = [];

export const RoutingModuleWithProviders = RouterModule.forChild(routes);

