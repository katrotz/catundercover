'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import componentTemplate from './moodboard.component.html!text';
import componentStyles from './moodboard.component.less!';

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

    constructor() {
        this.tiles = [
            {cols: 1, rows: 2, src: '/assets/images/poster-1.jpg'},
            {cols: 1, rows: 1, src: '/assets/images/poster-2.jpg'},
            {cols: 1, rows: 2, src: '/assets/images/poster-3.jpg'},
            {cols: 1, rows: 1, src: '/assets/images/poster-4.jpg'},
            {cols: 1, rows: 1, src: '/assets/images/poster-5.jpg'},
            {cols: 1, rows: 1, src: '/assets/images/poster-6.jpg'},
            {cols: 1, rows: 2, src: '/assets/images/poster-7.jpg'},
            {cols: 1, rows: 2, src: '/assets/images/poster-1.jpg'},
            {cols: 1, rows: 0.35, href: 'https://soundcloud.com/castlevania-cod-cd2/western-underworld', title: 'Western Underworld', interpreter: 'Lazarus'},
            {cols: 1, rows: 1, src: '/assets/images/poster-2.jpg'},
        ];
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