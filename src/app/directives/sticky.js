'use strict';

import { Directive, ElementRef } from '@angular/core';

export default class StickyDirective {
    static get annotations() {
        return [
            new Directive({
                selector: '[sticky]',
                host: {
                    '(window:scroll)': 'onScroll()'
                },
                inputs: [
                    'stickyTopPx'
                ]
            })
        ]
    }

    static get parameters() {
        return [
            [ElementRef]
        ]
    }

    constructor(element) {
        this.element = element.nativeElement;
        window.x = this.element;
    }

    ngOnInit() {
        this.elementTopPx = this.element.getBoundingClientRect().top;
        this.stickyTopPx = parseFloat(this.stickyTopPx) || 0;
    }

    onScroll() {
        let scrollTop = this.currentScroll();

        if (scrollTop >= (this.elementTopPx - this.stickyTopPx)) {
            this.element.classList.add('sticky');
        } else {
            this.element.classList.remove('sticky');
        }
    }

    currentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    }
}