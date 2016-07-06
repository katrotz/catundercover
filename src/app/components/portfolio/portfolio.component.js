'use strict';

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import componentTemplate from './portfolio.component.html!text';
import componentStyles from './portfolio.component.less!';

export default class PortfolioComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'portfolio',
                template: componentTemplate,
                styles: [componentStyles],
                directives: [
                    ROUTER_DIRECTIVES,
                    MD_CARD_DIRECTIVES,
                    MD_TOOLBAR_DIRECTIVES,
                    MD_GRID_LIST_DIRECTIVES
                ],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }

    constructor() {
        this.tags = [
            {
                title: 'All'
            },
            {
                title: 'Web Design'
            },
            {
                title: 'App Design'
            },
            {
                title: 'Illustrations'
            }
        ];

        this.items = [
            {
                title: 'Fatty Sundays',
                slug: 'fatty-sundays',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Web Design'
                    },
                    {
                        title: 'App Design'
                    }
                ]

            },
            {
                title: 'Anna Lucia Events',
                slug: 'anna-lucia-events',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Web Design'
                    },
                    {
                        title: 'App Design'
                    }
                ]

            },
            {
                title: 'Air Moldova',
                slug: 'air-moldova',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'App Design'
                    }
                ]

            },
            {
                title: 'AsoEbiBella',
                slug: 'asoebibella',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Illustrations'
                    }
                ]

            },
            {
                title: 'YV',
                slug: 'yv',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Web Design'
                    },
                    {
                        title: 'App Design'
                    }
                ]

            },
            {
                title: 'Vestidos',
                slug: 'vestidos',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Web Design'
                    },
                    {
                        title: 'App Design'
                    }
                ]

            },
            {
                title: 'Collins Interiors',
                slug: 'collins-interiors',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Web Design'
                    },
                    {
                        title: 'App Design'
                    }
                ]

            },

            {
                title: 'Simply Beautiful Flowers and Gifts',
                slug: 'simply-beautiful-flowers-and-gifts',
                image: '/assets/images/anna-lucia-events.png',
                tags: [
                    {
                        title: 'Web Design'
                    }
                ]

            }
        ];
    }
}