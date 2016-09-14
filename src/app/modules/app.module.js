'use strict';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import CommonModule from './common/common.module';
import CoreModule from './core/core.module';

import { RoutingModuleWithProviders, routingProviders } from './app.routing';
import AppComponent from './app.component';

export default class AppModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    RoutingModuleWithProviders,
                    CommonModule,
                    CoreModule,
                    BrowserModule
                ],
                declarations: [
                    AppComponent
                ],
                bootstrap: [
                    AppComponent
                ],
                providers: [
                    ...routingProviders
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ]
            })
        ];
    }
};
