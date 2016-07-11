'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class AboutIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'about-page',
                template: `
                    <h1>About</h1>
                `
            })
        ];
    }
}