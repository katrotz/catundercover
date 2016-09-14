'use strict';

import _ from 'lodash';

import TagsActions from './../services/TagsActions';
import { tagsState } from './tags';

const tagsActions = new TagsActions();

export const worksState = {
    filter: [_.cloneDeep(tagsState[0])],
    items: [
        {
            title: 'Air Moldova',
            description: `Air Moldova is one of the biggest airlines companies based in Chisinau, Moldova and offers a wide range of flight destinations as well as connecting flights. The company went online and started their online booking presence for a while now, and since it clicked with it customers, especially the ones located outside of Moldova, they decided to spread to more mediums by going mobile.
                <br><br>I started the project together with my team at Floagency working on the concept, wires as well as the user experience, working directly with a development agency that pitched the project along with us. After settling on the overall UI and the technical part of how the app was supposed to work with the developer team, I've started with the visual part of the design, building my way through all the pages in order to keep a similar user experience as the client has on the current website and to what visitors were familiar with.`,
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
            description: `Foxes Events is a UK based company specialising in children events like birthday parties and other themed gigs.
                <br><br>My task was to further develop their brand with more illustrations and icons they could use for different occasions.`,
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
            description: `Marigold&amp;Grey specialise in custom and pre-designed artisan welcome gifts for weddings, workshops, corporate, client, bridal party and other events.
                <br><br>Their website is based on hand drawn elements and tons of illustrations so I was supposed to develop illustrations that could be used for different gift categories.`,
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
            description: `Banners created for different holidays and events that could be used throughout social media.`,
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
            description: `Besides working on the website design for this client, I was also asked to work on a range of hand drawn illustrations containing birds, flowers or other organic elements.`,
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
            description: `Fatty Sundays is a chocolate covered pretzels family run business based in Brooklyn, New York. They have been on the market for a while creating a unique recipe of chocolate covered pretzels that have brought them fame all over the states.
                <br><br>Fatty Sundays needed a redesign of their website and a spruce of their brand since they were gaining more and more popularity with the sweet-toothed customers while their business expanding fast.
                <br><br>I’ve had the great &amp; fun opportunity to work with a beautiful brand created in house by Floagency's brand designer, - a brand that is perfectly representing the tasty and coloured pretzel treats. We have worked closely with the client at all times, catering to their visions and needs, concentrating on working out the big load of content that had to be organised so that it would be easy to browse their big variety of chocolate pretzels as well as understand their brand purpose and services they provide.
                <br><br>The website was created with a great attention for details, making it unique in it’s own way, starting with hand drawn wireframes to digital b&amp;w sketches to the final styled pages. Each page has been carefully tended to, adding colourful details but also using lots of white space in order to make way for the colourful pretzel boxes. The pretzel character - specifically created for this brand, pops up on some pages suggesting different actions to the user. One of the challenges was to work with the big variety of fonts and small design elements that had to be integrated, but all in all it was probably one of the most eye tasty projects I have ever worked on.
            `,
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
            description: `Stephen Karlisch has been shooting for editorial, catalog and commercial clients since the end of the 90's. Making a name for himself in Dallas as an interior and portrait photographer. His work includes simple silhouettes of all genres of interiors, and documentary portraits of their owners and designers. With a calm approach to any subject, Stephen strives to illustrate the beauty of intelligent design and well-planned details.
                <br><br>Stephen’s calm and minimalist nature was also taken into consideration when designing his portfolio website, using a muted color palette and a clean typeface combination. A lot of the photography is shot in b&amp;w so it transcended into the website design, making is masculine and somehow strict but at the same time popping with color when presenting Stephen’s elegant wedding photography sessions.`,
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
            description: `Liz Lui is a Seattle based wedding photographer. She is known for her modern, emotion-filled photographs that tell real love stories, and couples seek her out for gorgeous images that get to the heart of who they are.
                <br><br>When I first read Liz’s answers to her web questionnaire, I immediately knew she wanted something different and at the same time honest and approachable - as in fact her photography is.
                <br><br>Clean design, with simple lines and soft colors along with some sophisticated patterns from Liz’s brand made the website look really soft and elegant, and the golden accents gave it a sophisticated look. I would describe her website as airy, clean &amp; elegant, and of course all of this wouldn’t be whole along with the professional photography that Liz doesn’t seize to provide. Although I have worked on several photography portfolios over the years, I enjoyed working on this particular project as I felt a nice visual connection both with the work I was doing and the provided content for it.`,
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
            description: `Simply Beautiful Flowers is a flower boutique from Baltimore offering amazing bouquets and arrangements for different occasions.
                <br><br>They wanted to build their online presence from branding to a fully designed website that worked with different mediums, so that their clients could place orders online.
                <br><br>I have worked on the website design and layouts along with some custom made illustrations that would occasionally pop on different pages, setting it apart other flower shop websites that are usually crowded with too much imagery and chaotic products. Their color palette and font selection is earthy and soft, and along with the font pairing and use of white space make the delicate flowery compositions blend in.
                <br><br>Visitors can browse flower compositions and bouquets filtered by different occasions and colors and then choose a custom size and delivery date, being then guided through the checkout process that is easy to use and clean designed. Other pages serve as informational sources for visitors, as well as inspiration galleries to see how the compositions work in different settings like weddings and other events.`,
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
            description: `I can’t really describe my love for Vitra and their philosophy. Their furniture and accessories and the overall website content is always a great read so I wanted to give it a try and present a pitch for their then current website. (I have noticed they redesigned their website a bit which looks a bit more organised today).
                <br><br>I have restructured the content on the homepage focusing on different sections found throughout the website like the news, designers or magazine sections, as well as focused a bit more on popular products.`,
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
        case tagsActions.FILTER_WORKS_BY_TAG:
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
