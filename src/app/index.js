'use strict';

import {Component, View, enableProdMode, ViewEncapsulation} from 'angular2/core';
import {bootstrap as ngBootstrapBrowser} from 'angular2/platform/browser';
import mainStyles from './less/main.less!';

class CatUnderCoverPortfolio{
    static get annotations() {
        return [
            new Component({
                selector: 'cat-under-cover',
                directives: [],
                template: `<h1>Up and running</h1>`,
                styles: [mainStyles],
                encapsulation: ViewEncapsulation.None
            })
        ];
    }
}

export function bootstrap() {
    enableProdMode();
    return ngBootstrapBrowser(CatUnderCoverPortfolio);
}
