'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
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
                styles: [componentStyles]
            })
        ];
    }

    constructor() {
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
    }
}