'use strict';

export const tagsState = [
    {
        title: 'Web Design',
        slug: 'web-design'
    },
    {
        title: 'App Design',
        slug: 'app-design'
    },
    {
        title: 'Illustration',
        slug: 'illustrations'
    }
];

export const tagsReducers = (iState, iAction) => {
    switch(iAction.type) {
        default:
            return iState;
    }
};