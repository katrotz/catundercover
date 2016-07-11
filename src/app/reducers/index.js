'use strict';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineReducers } from '@ngrx/store';

import { tagsState, tagsReducers } from './tags';
import { worksState, worksReducers } from './works';

export const state = {
    tags: tagsState,
    works: worksState
};

export const reducers = combineReducers({
    tags: tagsReducers,
    works: worksReducers
});