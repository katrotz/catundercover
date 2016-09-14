'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import componentTemplate from './portfolio-showcase.component.html!text';
import componentStyles from './portfolio-showcase.component.less!';

export default class PortfolioShowcaseComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio-showcase',
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
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

    selectPrev() {
        this.selected = this.items_[this.selected - 1] ? this.selected - 1 : this.items_.length - 1;
        this.item = this.items_[this.selected];
    }

    selectNext() {
        this.selected = this.items_[this.selected + 1] ? this.selected + 1 : 0;
        this.item = this.items_[this.selected];
    }

    formatIndex(idx) {
        let output = String(idx + 1);

        if (output.length === 1) {
            output = '0' + output;
        }

        return output
    }
}