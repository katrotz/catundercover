'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import componentTemplate from './portfolio-item.component.html!text';
import componentStyles from './portfolio-item.component.less!';
import PortfolioService from './portfolio.service';
import StickyDirective from './../../directives/sticky';

export default class PortfolioItemComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio-item',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    MD_CARD_DIRECTIVES,
                    MD_TOOLBAR_DIRECTIVES,
                    MD_GRID_LIST_DIRECTIVES,
                    StickyDirective
                ],
                inputs: ['id'],
                providers: [PortfolioService],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    static get parameters() {
        return [
            [Store],
            [PortfolioService],
            [Router]
        ];
    }

    constructor(store, portfolio, router) {
        this.store = store;
        this.portfolio = portfolio;
        this.router = router;
        this.work = null;
    }

    ngOnInit() {
        this.work = this.portfolio.getWork(this.id);
        this.idx = this.portfolio.getWorkIndex(this.id);
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