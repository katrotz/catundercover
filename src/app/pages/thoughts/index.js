'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class ThoughtsIndexPage {
    static get annotations() {
        return [
            new Component({
                template: `
                    <h1>Thoughts</h1>
                `
            })
        ];
    }
}