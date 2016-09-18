'use strict';

import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';

import { RoutingModuleWithProviders, routingProviders } from './routes/index';
import directives from './directives/index';
import pipes from './pipes/index';
import services from './services/index';
import components from './components/index';

const importedModulesList = [
    CommonAngularModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule
];

const ownModulesList = [
    ...components,
    ...directives,
    ...pipes
];

const providers = [
    ...services,
    ...routingProviders
];

export default class CommonModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    ...importedModulesList,
                    RoutingModuleWithProviders
                ],
                exports: [
                    ...importedModulesList,
                    ...ownModulesList
                ],
                declarations: [
                    ...ownModulesList
                ]
            })
        ];
    }

    static forRoot() {
        return {
            ngModule: CommonModule,
            providers: providers
        }
    }
};
