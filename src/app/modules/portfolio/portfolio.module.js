'use strict';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import CommonModule from './../common/common.module';

import { RoutingModuleWithProviders, routingProviders } from './routes/index';
import components from './components/index';
import directives from './directives/index';
import pipes from './pipes/index';
import services from './services/index';

export default class PortfolioModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    CommonModule,
                    RoutingModuleWithProviders
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes
                ],
                providers: [
                    ...services,
                    ...routingProviders
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ]
            })
        ];
    }
};
