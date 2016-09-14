'use strict';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineReducers } from '@ngrx/store';

import { tagsState, tagsReducers } from './tags';
import { worksState, worksReducers } from './works';
import { moodboardState, moodboardReducers } from './moodboard';

export const state = {
    tags: tagsState,
    works: worksState,
    moodboard: moodboardState,
};

export const reducers = combineReducers({
    tags: tagsReducers,
    works: worksReducers,
    moodboard: moodboardReducers
});