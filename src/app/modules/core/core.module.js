'use strict';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store'

import CommonModule from './../common/common.module';

import { reducers, state } from './reducers/index';
import { RoutingModuleWithProviders, routingProviders } from './routes/index';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import ThoughtsComponent from './components/thoughts/thoughts.component';
import directives from './directives/index';
import pipes from './pipes/index';
import services from './services/index';

export default class CoreModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    CommonModule,
                    RoutingModuleWithProviders,
                    StoreModule.provideStore(reducers, state)
                ],
                exports: [
                    ...pipes,
                    ...directives,
                    NavbarComponent,
                    FooterComponent
                ],
                declarations: [
                    FooterComponent,
                    NavbarComponent,
                    ThoughtsComponent,
                    ...pipes,
                    ...directives
                ],
                providers: [
                    ...services,
                    ...routingProviders
                ]
            })
        ];
    }

    static get parameters() {
        return [
            [new Optional(), new SkipSelf(), CoreModule]
        ]
    }

    constructor (parentModule) {
        if (parentModule) {
            throw new Error(`CoreModule is already loaded`);
        }
    }
};
