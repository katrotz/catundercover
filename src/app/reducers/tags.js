'use strict';

export const tagsState = [
    {
        title: 'All',
        slug: 'all'
    },
    {
        title: 'Web Design',
        slug: 'web-design'
    },
    {
        title: 'App Design',
        slug: 'app-design'
    },
    {
        title: 'Illustrations',
        slug: 'illustrations'
    }
];

export const tagsReducers = (iState, iAction) => {
    switch(iAction.type) {
        default:
            return iState;
    }
};