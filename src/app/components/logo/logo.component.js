'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

export default class LogoComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'logo',
                template: `
                    <img src="assets/images/82d54fd1051de5f945ad7206fda308c6.jpg"/>
                `
            })
        ];
    }
}