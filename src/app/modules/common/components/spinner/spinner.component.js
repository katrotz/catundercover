'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

import componentTemplate from './spinner.component.html!text';
import componentStyles from './spinner.component.less!';

export default class SpinnerComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'spinner',
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
                encapsulation: ViewEncapsulation.None,
                inputs: ['delay:delay', 'isRunning:isRunning']
            })
        ];
    }

    constructor() {
        this.currentTimeout = null;
        this.isDelayedRunning = false;
        this.delay = 300;
    }

    ngOnDestroy() {
        this.cancelTimeout();
    }

    cancelTimeout() {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = null;
    }

    set isRunning(flag) {
        if (!flag) {
            this.cancelTimeout();
            return this.isDelayedRunning = false;
        }

        if (this.currentTimeout) {
            return true;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = flag;
            this.cancelTimeout();
        }, this.delay);
    }
}