'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

import MoodboardComponent from './../../components/moodboard/moodboard.component';

export default class MoodboardIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'moodboard-page',
                directives: [
                    MoodboardComponent
                ],
                template: `
                    <moodboard></moodboard>
                `
            })
        ];
    }
}