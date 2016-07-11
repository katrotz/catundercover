'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class MoodboardIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'moodboard-page',
                template: `
                    <h1>Moodboard</h1>
                `
            })
        ];
    }
}