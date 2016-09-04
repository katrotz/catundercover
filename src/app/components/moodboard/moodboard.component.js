'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { Store } from '@ngrx/store';

import componentTemplate from './moodboard.component.html!text';
import componentStyles from './moodboard.component.less!';
import { getItems } from './../../reducers/moodboard';

export default class MoodboardComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'moodboard',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    MD_GRID_LIST_DIRECTIVES
                ],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    static get parameters() {
        return [
            [Store]
        ]
    }

    constructor(store) {
        this.store = store;

        this.store.select('moodboard')
            .let(getItems())
            .subscribe(items => {
                this.tiles = items;
            });
    }

    ngOnInit() {
        function hideBanner() {
            const banner = document.querySelector('.moodboard .banner__outer');

            if (banner) {
                banner.style.opacity = 0;
            }

            window.removeEventListener('scroll', hideBanner);
        }
        window.addEventListener('scroll', hideBanner);
    }
}