'use strict';

import _ from 'lodash';
import Actions from './../actions/index';
import { tagsState } from './tags';

const dummyDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan ligula nunc, pharetra imperdiet risus malesuada et. Nulla facilisi. Suspendisse tempus nisl tortor, at pharetra ligula bibendum eget. Vivamus vehicula non neque quis pulvinar. Donec a ultricies purus. Vivamus egestas lacinia lorem, eu dignissim magna mollis sit amet. Nullam interdum, sapien id sodales luctus, metus massa faucibus elit, in malesuada metus nisl in nisl. Vivamus ut porttitor ligula. Sed vestibulum mauris mauris, vel tristique metus dapibus vel. Aliquam rhoncus nulla ut turpis feugiat ultrices. In hac habitasse platea dictumst. Nullam venenatis nec libero et mollis. Cras lacus metus, cursus quis accumsan et, gravida vitae erat. Vestibulum pretium ante hendrerit lacus vestibulum, quis finibus mi condimentum.`;

export const worksState = {
    filter: [_.cloneDeep(tagsState[0])],
    items: [
        {
            title: 'Air Moldova',
            description: dummyDescription,
            slug: 'air-moldova',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/app/air-moldova-app-presentation-preview.png',
            detailsImage: '/assets/works/app/air-moldova-app-presentation.png',
            tags: [
                {
                    title: 'App Design',
                    slug: 'app-design'
                }
            ]

        },
        {
            title: 'Little Foxes',
            description: dummyDescription,
            slug: 'little-foxes',
            client: 'Floagency',
            year: '2014',
            image: '/assets/works/illustration/illustration-little-foxes-preview.png',
            detailsImage: '/assets/works/illustration/illustration-little-foxes.jpg',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Marigold&Grey',
            description: dummyDescription,
            slug: 'marigold-n-grey',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/illustration/illustration-marigold-n-grey-preview.png',
            detailsImage: '/assets/works/illustration/illustration-marigold-n-grey.png',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Occasion Banners',
            description: dummyDescription,
            slug: 'occasion-banner',
            client: 'Floagency',
            year: '',
            image: '/assets/works/illustration/illustration-occasion-banners-preview.png',
            detailsImage: '/assets/works/illustration/illustration-occasion-banners.png',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Simply Beautiful Flowers',
            description: dummyDescription,
            slug: 'simply-beautiful-flowers-illustration',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/illustration/illustration-simply-beautiful-preview.png',
            detailsImage: '/assets/works/illustration/illustration-simply-beautiful.jpg',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Fatty Sundays',
            description: dummyDescription,
            slug: 'fatty-sundays',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/web/fs-presentation-preview.png',
            detailsImage: '/assets/works/web/fs-presentation.png',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Karlisch Photography',
            description: dummyDescription,
            slug: 'karlisch-photography',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/web/karlisch-preview.png',
            detailsImage: '/assets/works/web/karlisch.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Liz Lui Photography',
            description: dummyDescription,
            slug: 'liz-lui-photography',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/web/liz-lui-presentation-preview.png',
            detailsImage: '/assets/works/web/liz-lui-presentation.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Simply Beautiful Flowers',
            description: dummyDescription,
            slug: 'simply-beautiful-flowers-website',
            client: 'Floagency',
            year: '2015',
            image: '/assets/works/web/simply-beautiful-presentation-preview.png',
            detailsImage: '/assets/works/web/simply-beautiful-presentation.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Vitra',
            description: dummyDescription,
            slug: 'vitra',
            client: 'Pitch',
            year: '2015',
            image: '/assets/works/web/vitra-presentation-preview.png',
            detailsImage: '/assets/works/web/vitra-presentation.jpg',
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
