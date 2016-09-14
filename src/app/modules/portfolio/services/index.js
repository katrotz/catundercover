'use strict';

import PortfolioService from './portfolio.service';

export default [
    { provide: PortfolioService, useClass: PortfolioService }
];
