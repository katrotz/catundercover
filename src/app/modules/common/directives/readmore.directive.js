'use strict';

import { Directive, ElementRef } from '@angular/core';

export default class ReadMoreDirective {
    static get annotations() {
        return [
            new Directive({
                selector: '[readmore]',
                moduleId: __moduleName,
                inputs: [
                    'readmore'
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
        this.element = element;
        this.isCollapsed = false;
    }

    ngOnInit() {
        this.height = this.element.nativeElement.getBoundingClientRect().height;
        this.readmoreHeight = (this.readmore && this.readmore < this.height ? this.readmore : this.height);

        window.x = this.element.nativeElement;

        this.element.nativeElement.addEventListener('click', this.toggle.bind(this));

        this.toggle();
    }

    ngOnDestroy() {
        console.log('destroyed');
        this.element.nativeElement.removeEventListener('click', this.toggle.bind(this));
    }

    toggle() {
        if (this.isCollapsed) {
            return this.expandElement();
        } else {
            return this.collapseElement();
        }
    }

    collapseElement() {
        if (!this.isCollapsed) {
            this.element.nativeElement.style.maxHeight = this.readmoreHeight + 'px';
            this.element.nativeElement.style.overflowY = 'hidden';
            this.isCollapsed = true;
        }

        return this;
    }

    expandElement() {
        if (this.isCollapsed) {
            this.element.nativeElement.style.maxHeight = null;
            this.element.nativeElement.style.overflowY = 'visible';
            this.isCollapsed = false;
        }

        return this;
    }
}