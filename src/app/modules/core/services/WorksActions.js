'use strict';

import { Injectable } from '@angular/core';

export default class WorksActions {
    static annotations() {
        return [new Injectable()];
    }

    /**
     * Namespace actions
     * @returns {string}
     * @constructor
     */
    get ACTION_PREFIX() {
        return `WORKS`;
    }
}
