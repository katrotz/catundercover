'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { ROUTER_DIRECTIVES } from '@angular/router';

import componentTemplate from './portfolio-showcase.component.html!text';
import componentStyles from './portfolio-showcase.component.less!';
// import Actions from './../../actions/index';

export default class PortfolioShowcaseComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio-showcase',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    MD_CARD_DIRECTIVES,
                    ROUTER_DIRECTIVES
                ],
                inputs: ['items'],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    static get parameters() {
        return [
            [Store]
        ];
    }

    constructor(store) {
        this.store = store;
        this.selected = 0;
        this.item = null;
        this.items_ = [];
    }

    ngOnInit() {
        this.items.subscribe(items => {
            this.items_ = items;
            this.select(0);
        });
    }

    select(idx) {
        this.selected = idx;
        this.item = this.items_[this.selected] || this.items_[0];
    }

    formatIndex(idx) {
        let output = String(idx + 1);

        if (output.length === 1) {
            output = '0' + output;
        }

        return output
    }
}