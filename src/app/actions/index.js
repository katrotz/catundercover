'use strict';

import TagsActions from './tags';
import WorksActions from './works';

export default {
    tags: new TagsActions(),
    works: new WorksActions()
}