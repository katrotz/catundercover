'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import NavbarComponent from './../navbar/navbar.component';
import FooterComponent from './../footer/footer.component';
import componentStyles from './catundercover.component.less!';

export default class CatUndercoverComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'catundercover',
                template: `
                    <section class="hr hr--orange"></section>
                    <navbar></navbar>
                    <div id="main" class="main">
                        <router-outlet></router-outlet>
                    </div>
                    <footer></footer>
                `,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    NavbarComponent,
                    FooterComponent
                ],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }
}