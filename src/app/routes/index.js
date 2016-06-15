'use strict';

import { provideRouter } from '@angular/router';

import AboutIndexPage from './../pages/about/index';
import MoodboardIndexPage from './../pages/moodboard/index';
import ThoughtsIndexPage from './../pages/thoughts/index';
import WorkIndexPage from './../pages/work/index';

const routes = [
    { path: '/',  component: WorkIndexPage },
    { path: '/about',  component: AboutIndexPage },
    { path: '/moodboard',  component: MoodboardIndexPage },
    { path: '/thoughts',  component: ThoughtsIndexPage }
];

export default [
    provideRouter(routes)
];