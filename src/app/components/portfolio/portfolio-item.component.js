'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import componentTemplate from './portfolio-item.component.html!text';
import componentStyles from './portfolio-item.component.less!';
import PortfolioService from './portfolio.service';

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
                    MD_GRID_LIST_DIRECTIVES
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
            [PortfolioService]
        ];
    }

    constructor(store, portfolio) {
        this.store = store;
        this.portfolio = portfolio;
        this.work = null;
    }

    ngOnInit() {
        this.work = this.portfolio.getWork(this.id);
        this.idx = this.portfolio.getWorkIndex(this.id);
    }

    goToPrevious() {
        this.idx -= 1;
        this.work = this.portfolio.getWorkByIndex(this.idx);
    }

    goToNext() {
        this.idx += 1;
        this.work = this.portfolio.getWorkByIndex(this.idx);
    }
}