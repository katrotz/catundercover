'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import componentStyles from './app.component.less!';

export default class AppComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'app',
                template: `
                    <section class="hr top"></section>
                    <navbar></navbar>
                    <div id="main" class="main">
                        <router-outlet></router-outlet>
                    </div>
                    <footer></footer>
                    <section class="hr bottom"></section>
                `,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
                directives: [],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }
}