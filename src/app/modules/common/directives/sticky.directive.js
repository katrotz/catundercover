'use strict';

import { Directive, ElementRef, EventEmitter } from '@angular/core';

export default class StickyDirective {
    static get annotations() {
        return [
            new Directive({
                selector: '[sticky]',
                host: {
                    '(window:scroll)': 'onScroll()'
                },
                moduleId: __moduleName,
                inputs: [
                    'stickyTopPx',
                    'elementTopPx'
                ],
                outputs: [
                    'stick'
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
        this.stick = new EventEmitter();
    }

    ngOnInit() {
        if (typeof this.elementTopPx === 'undefined') {
            this.elementTopPx = this.element.getBoundingClientRect().top;
        }
        this.stickyTopPx = parseFloat(this.stickyTopPx) || 0;

        if (this.elementTopPx < this.stickyTopPx) {
            this.elementTopPx = this.stickyTopPx;
        }
    }

    onScroll() {
        let scrollTop = this.currentScroll();

        if (scrollTop >= (this.elementTopPx - this.stickyTopPx)) {
            this.element.classList.add('sticky');
            this.stick.emit(true);
        } else {
            this.element.classList.remove('sticky');
            this.stick.emit(false);
        }
    }

    currentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    }
}