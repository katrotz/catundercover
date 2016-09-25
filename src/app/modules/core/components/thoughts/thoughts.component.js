'use strict';

import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import componentTemplate from './thoughts.component.html';
import componentStyles from './thoughts.component.less';

export default class ThoughtsComponent{
    static get annotations() {
        return [
            new Component({
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName
            })
        ];
    }
};
