'use strict';

import Actions from './../actions/index';

const dummyDescription = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan ligula nunc, pharetra imperdiet risus malesuada et. Nulla facilisi. Suspendisse tempus nisl tortor, at pharetra ligula bibendum eget. Vivamus vehicula non neque quis pulvinar. Donec a ultricies purus. Vivamus egestas lacinia lorem, eu dignissim magna mollis sit amet. Nullam interdum, sapien id sodales luctus, metus massa faucibus elit, in malesuada metus nisl in nisl. Vivamus ut porttitor ligula. Sed vestibulum mauris mauris, vel tristique metus dapibus vel. Aliquam rhoncus nulla ut turpis feugiat ultrices. In hac habitasse platea dictumst. Nullam venenatis nec libero et mollis. Cras lacus metus, cursus quis accumsan et, gravida vitae erat. Vestibulum pretium ante hendrerit lacus vestibulum, quis finibus mi condimentum.

Aliquam ullamcorper rhoncus ultricies. Vestibulum consectetur lectus tortor, non sollicitudin orci gravida vitae. Ut sem sem, tristique quis mi sed, tristique tempor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sed est in ex commodo luctus et in libero. Maecenas a iaculis augue. Vestibulum sed porta mi, vel maximus felis. Suspendisse venenatis dolor magna, et vulputate velit sodales quis.
`;

const dummyDetails = [
    {
        title: 'Home page',
        image: '/assets/images/website-mockup.jpg'
    },
    {
        title: 'Details page',
        image: '/assets/images/website-mockup.jpg'
    }
];

export const worksState = {
    filter: [{
        title: 'All',
        slug: 'all'
    }],
    items: [
        {
            title: 'Fatty Sundays',
            description: dummyDescription,
            slug: 'fatty-sundays',
            client: 'Flosites',
            year: '2015',
            image: '/assets/images/anna-lucia-events.png',
            details: dummyDetails,
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                },
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },
        {
            title: 'Anna Lucia Events',
            description: dummyDescription,
            slug: 'anna-lucia-events',
            client: 'Flosites',
            year: '2015',
            details: dummyDetails,
            image: '/assets/images/anna-lucia-events.png',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                },
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },
        {
            title: 'Air Moldova',
            description: dummyDescription,
            slug: 'air-moldova',
            client: 'Flosites',
            year: '2015',
            details: dummyDetails,
            image: '/assets/images/anna-lucia-events.png',
            tags: [
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },
        {
            title: 'AsoEbiBella',
            description: dummyDescription,
            slug: 'asoebibella',
            client: 'Flosites',
            year: '2015',
            details: dummyDetails,
            image: '/assets/images/anna-lucia-events.png',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'YV',
            description: dummyDescription,
            slug: 'yv',
            client: 'Flosites',
            year: '2015',
            details: dummyDetails,
            image: '/assets/images/anna-lucia-events.png',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                },
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },
        {
            title: 'Vestidos',
            description: dummyDescription,
            slug: 'vestidos',
            client: 'Flosites',
            year: '2015',
            details: dummyDetails,
            image: '/assets/images/anna-lucia-events.png',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                },
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },
        {
            title: 'Collins Interiors',
            description: dummyDescription,
            slug: 'collins-interiors',
            client: 'Flosites',
            year: '2015',
            details: dummyDetails,
            image: '/assets/images/anna-lucia-events.png',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                },
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },

        {
            title: 'Simply Beautiful Flowers and Gifts',
            description: dummyDescription,
            client: 'Flosites',
            year: '2015',
            slug: 'simply-beautiful-flowers-and-gifts',
            image: '/assets/images/anna-lucia-events.png',
            details: dummyDetails,
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        }
    ]
};

export const worksReducers = (iState, iAction) => {
    switch(iAction.type) {
        case Actions.tags.FILTER_WORKS_BY_TAG:
            const state = _.cloneDeep(iState);
            state.filter = [iAction.payload];
            return state;
        default:
            return iState;
    }
};

export const getItems = () => {
    return (state) => {
        return state.map(worksState => {
            return worksState.items;
        });
    };
};

export const getFilter = () => {
    return (state) => {
        return state.map(worksState => {
            return worksState.filter;
        });
    };
};

export const getFilteredItems = () => {
    return state => {
        return state.map(worksState => {
            const hasAll = _.find(worksState.filter, {slug: 'all'});

            return worksState.items.filter(item => {
                return Boolean(hasAll || item.tags.find(tag => {
                    return Boolean(_.find(worksState.filter, {slug: tag.slug}))
                }));
            });
        });
    };
};
