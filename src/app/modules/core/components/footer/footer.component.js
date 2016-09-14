'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

import componentTemplate from './footer.component.html!text';
import componentStyles from './footer.component.less!';

export default class FooterComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'footer',
                template: componentTemplate,
                styles: [componentStyles],
                moduleId: __moduleName,
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    constructor() {
        this.socialNetworks = [
            {
                title: 'Pinteres',
                class: 'pinterest',
                url: 'https://www.pinterest.com/ciripitca/'
            },
            {
                title: 'Instagram',
                class: 'instagram',
                url: 'https://www.instagram.com/cat_undercover/'
            },
            {
                title: 'Facebook',
                class: 'facebook',
                url: 'https://www.facebook.com/corina.ciripitca'
            },
            {
                title: 'Linkedin',
                class: 'linkedin',
                url: 'https://www.linkedin.com/in/corina-ciripitca'
            }
        ];
    }
}