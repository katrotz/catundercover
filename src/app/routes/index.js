'use strict';

import { provideRouter } from '@angular/router';

import AboutIndexPage from './../pages/about/index.component';
import MoodboardIndexPage from './../pages/moodboard/index.component';
import ThoughtsIndexPage from './../pages/thoughts/index.component';
import WorkIndexPage from './../pages/work/index.component';
import WorkViewPage from './../pages/work/view.component';

const routes = [
    { path: '',  component: WorkIndexPage },
    { path: 'work',  component: WorkIndexPage },
    { path: 'work/:workId',  component: WorkViewPage },
    { path: 'about',  component: AboutIndexPage },
    { path: 'moodboard',  component: MoodboardIndexPage },
    { path: 'thoughts',  component: ThoughtsIndexPage }
];

export default [
    provideRouter(routes)
];