'use strict';

import { Directive, ElementRef } from '@angular/core';

export default class StickyDirective {
    static get annotations() {
        return [
            new Directive({
                selector: '[sticky]',
                host: {
                    '(window:scroll)': 'onScroll()'
                }
            })
        ]
    }

    static get parameters() {
        return [
            [ElementRef]
        ]
    }

    constructor(element) {
        this.className = 'sticky';
        this.element = element;
        window.x = this.element;
    }
    
    onScroll() {
        let boundingRect = this.element.nativeElement.getBoundingClientRect();
        let scrollTop = document.scrollingElement.scrollTop;
        let hasSticky = this.element.nativeElement.classList.contains(this.className);
        let mustStick = scrollTop > boundingRect.height/4;

        if (!hasSticky && mustStick) {
            this.element.nativeElement.classList.add(this.className);
        } else if (hasSticky && !mustStick) {
            this.element.nativeElement.classList.remove(this.className);
        }
    }
}