'use strict';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import PortfolioItemComponent from './../../components/portfolio/portfolio-item.component';

export default class WorkViewPage {
    static get annotations() {
        return [
            new Component({
                selector: 'work-view-page',
                directives: [
                    PortfolioItemComponent
                ],
                template: `<portfolio-item [id]="workId"></portfolio-item>`
            })
        ];
    }

    static get parameters() {
        return [
            [ActivatedRoute]
        ]
    }

    constructor(activatedRoute) {
        this.route = activatedRoute;
        this.workId = null;
    }

    ngOnInit() {
        this.sParams = this.route.params.subscribe(params => {
            this.workId = params.workId;
        });
    }

    ngOnDestroy() {
        this.sParams.unsubscribe();
    }
}