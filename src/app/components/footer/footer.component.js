'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import componentTemplate from './footer.component.html!text';
import componentStyles from './footer.component.less!';

export default class FooterComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'footer',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    MD_TOOLBAR_DIRECTIVES
                ],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    constructor() {
        this.socialNetworks = [
            {
                title: 'Pinteres',
                class: 'pinterest',
                url: 'http://katrotz.space'
            },
            {
                title: 'Instagram',
                class: 'instagram',
                url: 'http://katrotz.space'
            },
            {
                title: 'Facebook',
                class: 'facebook',
                url: 'http://katrotz.space'
            },
            {
                title: 'Linkedin',
                class: 'linkedin',
                url: 'http://katrotz.space'
            }
        ];
    }
}