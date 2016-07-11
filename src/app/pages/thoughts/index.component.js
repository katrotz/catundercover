'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class ThoughtsIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'thoughts-page',
                template: `
                    <h1>Thoughts</h1>
                `
            })
        ];
    }
}