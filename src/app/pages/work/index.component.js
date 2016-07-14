'use strict';

import { Component } from '@angular/core';

import PortfolioComponent from './../../components/portfolio/portfolio.component';

export default class WorkIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'works-page',
                directives: [
                    PortfolioComponent
                ],
                template: `<portfolio></portfolio>`
            })
        ];
    }
}