'use strict';

import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import componentTemplate from './navbar.component.html';
import componentStyles from './navbar.component.less';

export default class NavbarComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'navbar',
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
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
                title: 'Moodboard',
                routerLink: '/moodboard'
            },
            {
                title: 'About',
                routerLink: '/about'
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
        this.logoElement = this.navbarElement.querySelector('.logo');
        this.stickyLogoElement = document.querySelector('#sticky-logo a');
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
        this.stickyLogoElement.style.height = `${height}px`;
        this.stickyLogoElement.style.lineHeight = `${height}px`;

        let ratio = parseInt(100 * ((height - this.minElementHeight)/(this.elementInitClientRect.height - this.minElementHeight)));

        this.logoElement.style.opacity = ratio/100;
        if (!ratio) {
            this.logoElement.style.display = 'none';
            this.stickyLogoElement.style.display = 'block';
        } else {
            this.logoElement.style.display = 'flex';
            this.stickyLogoElement.style.display = 'none';
        }
    }

    getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;
    }
}