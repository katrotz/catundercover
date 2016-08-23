'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

export default class ThoughtsIndexPage {
    static get annotations() {
        return [
            new Component({
                selector: 'thoughts-page',
                template: `Please wait`
            })
        ];
    }

    static get parameters() {
        return [
            [Router]
        ]
    }

    constructor(router) {
        this.router = router;

        this.router.navigateByUrl('work');
    }
}