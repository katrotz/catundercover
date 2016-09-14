'use strict';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import _ from 'lodash';

import { getItems } from '/app/modules/core/reducers/works';

export default class PortfolioService {
    static get annotations() {
        return [
            new Injectable()
        ];
    }

    static get parameters() {
        return [
            [Store]
        ];
    }

    constructor(store) {
        this.store = store;
        this.works = this.store.select('works').let(getItems());
    }

    getWorks() {

    }

    getWork(iWorkId) {
        let workId = String(iWorkId);
        let work;

        this.works.subscribe(works => {
            work = _.find(works, {slug: workId});
        });

        return work;
    }

    getWorkByIndex(iIndex) {
        let index = Number(iIndex);
        let work;

        this.works.subscribe(works => {
            let count = works.length;
            let absoluteIndex = (index < 0) ? -1 * index : index;
            let idx = (absoluteIndex < count) ? absoluteIndex : (absoluteIndex % count);

            if (index < 0) {
                idx = count - idx - 1;
            }
            
            work = works[idx];
        });

        return work;
    }

    getWorkIndex(iWorkId) {
        let workId = String(iWorkId);
        let index = null;

        this.works.subscribe(works => {
            works.map((work, idx) => {
                if (work.slug === workId) {
                    index = idx;
                }
            })
        });

        return index;
    }
}