'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class WorkIndexPage {
    static get annotations() {
        return [
            new Component({
                template: `
                    <h1>Work</h1>
                `
            })
        ];
    }
}