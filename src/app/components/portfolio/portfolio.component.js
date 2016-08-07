'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import componentTemplate from './portfolio.component.html!text';
import componentStyles from './portfolio.component.less!';
import { getFilteredItems, getFilter } from './../../reducers/works';
import Actions from './../../actions/index';
import PortfolioShowcase from './portfolio-showcase.component';

export default class PortfolioComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    MD_CARD_DIRECTIVES,
                    MD_TOOLBAR_DIRECTIVES,
                    MD_GRID_LIST_DIRECTIVES,
                    PortfolioShowcase
                ],
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
        this.tags = this.store.select('tags');
        this.items = this.store.select('works').let(getFilteredItems());
        this.store.select('works').let(getFilter()).subscribe(filter => {this.selectedTags = filter;});
    }

    ngOnInit() {
        this.selectedTags = [];

        this.tags.subscribe(tags => {tags.length ? this.filterWorksByTag(tags[0]) : null;});
    }

    filterWorksByTag(iTag) {
        this.store.dispatch(
            Actions.tags.filterWorksByTag(iTag)
        );

        return this;
    }

    isSelectedTag(iTag) {
        return _.find(this.selectedTags, {slug: iTag.slug});
    }
}