'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import componentStyles from './app.component.less!';

export default class AppComponent{
    static get annotations() {
        return [
            new Component({
                selector: 'app',
                template: `
                    <!--<div id="page-spinner" *ngIf="busy">-->
                        <!--<spinner [delay]="500" [isRunning]="busy"></spinner>-->
                    <!--</div>-->
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

    static get parameters() {
        return [
            [Router]
        ]
    }

    constructor(router) {
        // this.busy = true;
        // this.router = router;
        //
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationStart) {
        //         this.busy = true;
        //     }
        //     if (event instanceof NavigationEnd) {
        //         setTimeout(() => {
        //             this.busy = false;
        //         }, 100);
        //     }
        // })
    }

    ngAfterViewInit() {
        setTimeout(() => {
            document.querySelector('#app-spinner-outer').style.display = 'none';
        }, 500);

        document.querySelector('app').style.visibility = 'visible';
    }
}
