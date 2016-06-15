'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class MoodboardIndexPage {
    static get annotations() {
        return [
            new Component({
                template: `
                    <h1>Moodboard</h1>
                `
            })
        ];
    }
}