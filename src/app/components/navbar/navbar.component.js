'use strict';

import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import SplitListPipe from './../../pipes/split-list.pipe';
import componentTemplate from './navbar.component.html';
import componentStyles from './navbar.component.less';

export default class NavbarComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'navbar',
                directives: [
                    MD_TOOLBAR_DIRECTIVES,
                    MD_BUTTON_DIRECTIVES,
                    ROUTER_DIRECTIVES
                ],
                pipes: [SplitListPipe],
                template: componentTemplate,
                styles: [componentStyles],
                host: {
                    '(window:scroll)': 'onScroll()'
                }
            })
        ];
    }

    static get parameters() {
        return [
            [ElementRef]
        ];
    }

    constructor(element) {
        this.menuItems = [
            {
                title: 'Work',
                routerLink: '/work'
            },
            {
                title: 'About',
                routerLink: '/about'
            },
            {
                title: 'Moodboard',
                routerLink: '/moodboard'
            },
            {
                title: 'Thoughts',
                routerLink: '/thoughts'
            }
        ];
        this.element = element;
    }

    ngOnInit() {
        this.navbarElement = this.element.nativeElement.querySelector('.navbar');
        this.logoElement = this.navbarElement.querySelector('.navbar__item__main');
        this.stickyLogoElement = document.querySelector('#sticky-logo');

        this.elementInitClientRect = this.navbarElement.getBoundingClientRect();
        this.minElementHeight = parseFloat(window.getComputedStyle(this.navbarElement).minHeight);
    }

    onScroll() {
        this.updateStickyState();
    }

    updateStickyState() {
        let scrollTop = this.getCurrentScroll();
        let height = this.elementInitClientRect.height - scrollTop;
        if (height < this.minElementHeight) {
            height = this.minElementHeight;
        }

        this.navbarElement.style.height = `${height}px`;

        let ratio = parseInt(100 * ((height - this.minElementHeight)/(this.elementInitClientRect.height - this.minElementHeight)));

        this.logoElement.style.opacity = ratio/100;
        if (!ratio) {
            this.logoElement.style.display = 'none';
            /*this.stickyLogoElement.style.display = 'block';*/
        } else {
            this.logoElement.style.display = 'flex';
            /*this.stickyLogoElement.style.display = 'none';*/
        }
    }

    getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    }
}