'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import LogoComponent from './../logo/logo.component';

export default class CatUndercoverComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'catundercover',
                template: `
                    <h1>Up and running</h1>
                    <logo></logo>
                    <nav>
                      <a [routerLink]="['/']">Work</a>
                      <a [routerLink]="['/about']">About</a>
                      <a [routerLink]="['/moodboard']">Moodboard</a>
                      <a [routerLink]="['/thoughts']">Thoughts</a>
                    </nav>
                    <router-outlet></router-outlet>
                `,
                styles: [],
                directives: [ROUTER_DIRECTIVES, LogoComponent],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }
}