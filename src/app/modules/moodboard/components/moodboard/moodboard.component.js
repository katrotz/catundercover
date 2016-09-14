'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

//@todo: Provide the reducer helpers via DI
import { getItems } from './../../../core/reducers/moodboard';

import componentTemplate from './moodboard.component.html!text';
import componentStyles from './moodboard.component.less!';

export default class MoodboardComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'moodboard',
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
