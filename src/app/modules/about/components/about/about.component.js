'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

import componentTemplate from './about.component.html!text';
import componentStyles from './about.component.less!';

export default class AboutComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'about',
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
                encapsulation: ViewEncapsulation.None
            })
        ];
    }
}