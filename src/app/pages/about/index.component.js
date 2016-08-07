'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import AboutComponent from './../../components/about/about.component';

export default class AboutIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'about-page',
                directives: [
                    AboutComponent
                ],
                template: `
                    <about></about>
                `
            })
        ];
    }
}