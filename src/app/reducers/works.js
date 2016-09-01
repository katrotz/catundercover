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
            client: 'Air Moldova',
            year: '2016',
            image: '/assets/works/app/air-moldova-app-presentation.png',
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
            client: 'Little Foxes',
            year: '2016',
            image: '/assets/works/illustration/illustration-little-foxes.jpg',
            detailsImage: '/assets/works/illustration/illustration-little-foxes.jpg',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Marigold and Grey',
            description: dummyDescription,
            slug: 'marigold-n-grey',
            client: 'Marigold and Grey',
            year: '2016',
            image: '/assets/works/illustration/illustration-marigold-n-grey.png',
            detailsImage: '/assets/works/illustration/illustration-marigold-n-grey.png',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Occasion Banner',
            description: dummyDescription,
            slug: 'occasion-banner',
            client: 'Catundercover',
            year: '2016',
            image: '/assets/works/illustration/illustration-occasion-banners.png',
            detailsImage: '/assets/works/illustration/illustration-occasion-banners.png',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'Simply Beautiful',
            description: dummyDescription,
            slug: 'simply-beautiful',
            client: 'Simply Beautiful',
            year: '2016',
            image: '/assets/works/illustration/illustration-simply-beautiful.jpg',
            detailsImage: '/assets/works/illustration/illustration-simply-beautiful.jpg',
            tags: [
                {
                    title: 'Illustrations',
                    slug: 'illustrations'
                }
            ]

        },
        {
            title: 'FS Presentation',
            description: dummyDescription,
            slug: 'fs-presentation',
            client: 'FS Presentation',
            year: '2016',
            image: '/assets/works/web/fs-presentation.jpg',
            detailsImage: '/assets/works/web/fs-presentation.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Karlisch',
            description: dummyDescription,
            slug: 'karlisch',
            client: 'Karlisch',
            year: '2016',
            image: '/assets/works/web/karlisch.jpg',
            detailsImage: '/assets/works/web/karlisch.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Liz Lui',
            description: dummyDescription,
            slug: 'liz-lui-presentation',
            client: 'Liz Lui',
            year: '2016',
            image: '/assets/works/web/liz-lui-presentation.jpg',
            detailsImage: '/assets/works/web/liz-lui-presentation.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Simply Beautiful Presentation',
            description: dummyDescription,
            slug: 'simply-beautiful-presentation',
            client: 'Simply Beautiful',
            year: '2016',
            image: '/assets/works/web/simply-beautiful-presentation.jpg',
            detailsImage: '/assets/works/web/simply-beautiful-presentation.jpg',
            tags: [
                {
                    title: 'Web Design',
                    slug: 'web-design'
                }
            ]

        },
        {
            title: 'Vitra Presentation',
            description: dummyDescription,
            slug: 'vitra-presentation',
            client: 'Vitra Presentation',
            year: '2016',
            image: '/assets/works/web/vitra-presentation.jpg',
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
