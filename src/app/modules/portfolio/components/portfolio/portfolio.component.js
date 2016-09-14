'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import _ from 'lodash';

//@todo: Inject using DI
import { getFilteredItems, getFilter } from '/app/modules/core/reducers/works';
import TagsActions from '/app/modules/core/services/TagsActions';

import componentTemplate from './portfolio.component.html!text';
import componentStyles from './portfolio.component.less!';

export default class PortfolioComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio',
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
            [TagsActions]
        ];
    }

    constructor(store, tagsActions) {
        this.store = store;
        this.tagsActions = tagsActions;
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
            this.tagsActions.filterWorksByTag(iTag)
        );

        return this;
    }

    isSelectedTag(iTag) {
        return _.find(this.selectedTags, {slug: iTag.slug});
    }
}