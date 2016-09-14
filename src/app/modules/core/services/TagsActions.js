'use strict';

import { Injectable } from '@angular/core';

export default class TagsActions {
    static annotations() {
        return [new Injectable()];
    }

    get ACTION_PREFIX() {
        return `TAGS`;
    }

    get FILTER_WORKS_BY_TAG() {
        return `${this.ACTION_PREFIX}.FILTER_WORKS_BY_TAG`;
    }

    filterWorksByTag(tag) {
        return {
            type: this.FILTER_WORKS_BY_TAG,
            payload: tag
        }
    }
}
