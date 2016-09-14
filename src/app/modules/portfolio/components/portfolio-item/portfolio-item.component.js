'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import PortfolioService from './../../services/portfolio.service';
import componentTemplate from './portfolio-item.component.html!text';
import componentStyles from './portfolio-item.component.less!';

export default class PortfolioItemComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio-item',
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    static get parameters() {
        return [
            [Store],
            [PortfolioService],
            [Router],
            [ActivatedRoute]
        ];
    }

    constructor(store, portfolio, router, route) {
        this.store = store;
        this.portfolio = portfolio;
        this.router = router;
        this.route = route;
        this.id = null;
        this.work = null;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.work = this.portfolio.getWork(this.id);
            this.idx = this.portfolio.getWorkIndex(this.id);
        });

    }

    goToPrevious() {
        this.idx -= 1;
        this.work = this.portfolio.getWorkByIndex(this.idx);
        this.router.navigate(['/work', this.work.slug]);
    }

    goToNext() {
        this.idx += 1;
        this.work = this.portfolio.getWorkByIndex(this.idx);
        this.router.navigate(['/work', this.work.slug]);
    }
}
