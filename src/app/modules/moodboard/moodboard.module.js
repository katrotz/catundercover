'use strict';

import { NgModule } from '@angular/core';

import CommonModule from './../common/common.module';

import { RoutingModuleWithProviders, routingProviders } from './routes/index';
import MoodboardComponent from './components/moodboard/moodboard.component';
import directives from './directives/index';
import pipes from './pipes/index';
import services from './services/index';

export default class MoodboardModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [
                    CommonModule,
                    RoutingModuleWithProviders
                ],
                declarations: [
                    MoodboardComponent,
                    ...directives,
                    ...pipes
                ],
                providers: [
                    ...services,
                    ...routingProviders
                ]
            })
        ];
    }
};
