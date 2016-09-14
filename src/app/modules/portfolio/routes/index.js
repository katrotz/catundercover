'use strict';

import { RouterModule } from '@angular/router';

import PortfolioComponent from './../components/portfolio/portfolio.component';
import PortfolioItemComponent from './../components/portfolio-item/portfolio-item.component';

const routes = [
    { path: '',  component: PortfolioComponent },
    { path: ':id',  component: PortfolioItemComponent },
];

export const routingProviders = [];

export const RoutingModuleWithProviders = RouterModule.forChild(routes);
