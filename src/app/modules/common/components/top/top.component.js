'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

import componentTemplate from './top.component.html!text';
import componentStyles from './top.component.less!';

export default class TopComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'top',
                template: componentTemplate,
                host: {
                    '(window:scroll)': 'onScroll()'
                },
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
                encapsulation: ViewEncapsulation.Native
            })
        ];
    }

    constructor() {
        this.limit = Number(window.innerHeight);
        this.opacity = 0;
    }

    onScroll() {
        let scrollTop = this.currentScroll();

        if (scrollTop >= this.limit) {
            this.opacity = 1;
        } else {
            this.opacity = 0;
        }
    }

    onClick() {
        this.scrollToTop(2000);
    }

    scrollToTop(scrollDuration) {
        let cosParameter = window.scrollY / 2;
        let scrollCount = 0;
        let oldTimestamp = performance.now();
        function step (newTimestamp) {
            scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) {
                window.scrollTo(0, 0)
            }
            if (window.scrollY === 0) {
                return
            }
            window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }

    currentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    }
}