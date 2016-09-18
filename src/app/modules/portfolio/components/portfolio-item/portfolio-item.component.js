'use strict';

import { Component, ViewEncapsulation, ElementRef, trigger, state, transition, animate, style, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import PortfolioService from './../../services/portfolio.service';
import componentTemplate from './portfolio-item.component.html!text';
import componentStyles from './portfolio-item.component.less!';

export default class PortfolioItemComponent {
    static get annotations() {
        return [
            new HostBinding('@routeAnimation'),
            new Component({
                selector: 'portfolio-item',
                template: componentTemplate,
                styles: [
                    componentStyles
                ],
                moduleId: __moduleName,
                encapsulation: ViewEncapsulation.None,
                // host: {
                //     '[@routeAnimation]': 'routeAnimation',
                //     '[style.display]': 'display',
                //     '[style.position]': 'position'
                // },
                // animations: [
                //     trigger('routeAnimation', [
                //         state('*',
                //             style({
                //                 opacity: 1,
                //                 transform: 'translateX(0)'
                //             })
                //         ),
                //         transition('void => *', [
                //             style({
                //                 opacity: 0,
                //                 transform: 'translateX(-100%)'
                //             }),
                //             animate('0.2s ease-in')
                //         ]),
                //         transition('* => void', [
                //             animate('0.5s ease-out', style({
                //                 opacity: 0,
                //                 transform: 'translateY(100%)'
                //             }))
                //         ])
                //     ])
                // ]
            })
        ];
    }

    static get parameters() {
        return [
            [Store],
            [PortfolioService],
            [Router],
            [ActivatedRoute],
            [ElementRef]
        ];
    }

    // get routeAnimation() {
    //     return true;
    // }
    //
    // get display() {
    //     return 'block';
    // }
    //
    // get position() {
    //     return 'absolute';
    // }

    constructor(store, portfolio, router, route, element) {
        this.store = store;
        this.portfolio = portfolio;
        this.router = router;
        this.route = route;
        this.id = null;
        this.work = null;
        this.detailsImage = null;
        this.stickyTopPx = '64px';
        this.isNavigationSticky = false;
        this.element = element;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.work = this.portfolio.getWork(this.id);
            this.idx = this.portfolio.getWorkIndex(this.id);

            if (!this.isNavigationSticky) {
                this.scrollToTop();
            } else {
                this.scrollToTop(120);
            }

            this.loadDetailImage();
        });
    }

    ngOnDestroy() {
        this.route.params.unsubscribe();
    }

    goToPrevious() {
        this.idx -= 1;
        this.work = this.portfolio.getWorkByIndex(this.idx);
        this.router.navigate(['/work', this.work.slug]);
    }

    goToNext() {
        this.idx += 1;
        this.work = this.portfolio.getWorkByIndex(this.idx);
        this.router.navigate(['/work', this.work.slug]);
    }

    loadDetailImage() {
        const img = new Image();
        this.detailsImageOpacity = 0;
        this.detailsImage = null;

        img.onload = () => {

            setTimeout(()=> {
                this.detailsImage = this.work.detailsImage;
                setTimeout(()=> {
                    this.detailsImageOpacity = 1;
                }, 50);
            }, 100);
        };

        img.src = this.work.detailsImage;

        return this;
    }

    showDetailsImage(showcase, arrow) {
        arrow.classList.remove('bounce');

        return this.scrollToTop();
    }

    scrollToTop(topScroll=0, scrollDuration=1000) {
        let cosParameter = (window.scrollY - topScroll) / 2;
        let scrollCount = 0;
        let oldTimestamp = performance.now();
        function step (newTimestamp) {
            scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) {
                window.scrollTo(0, topScroll)
            }
            if (window.scrollY <= topScroll) {
                return
            }
            let newScrollTop = Math.round(cosParameter + cosParameter * Math.cos(scrollCount));

            window.scrollTo(0, newScrollTop < topScroll ? topScroll : newScrollTop);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);

        return this;
    }

    get isLoading() {
        return !Boolean(this.detailsImage);
    }

    onNavigationStick(isNavigationSticky) {
        this.isNavigationSticky = Boolean(isNavigationSticky);
    }
}
