'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import componentTemplate from './about.component.html!text';
import componentStyles from './about.component.less!';

export default class AboutComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'about',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    MD_CARD_DIRECTIVES
                ],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }
}