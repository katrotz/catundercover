'use strict';

import TagsActions from './TagsActions';
import WorkActions from './WorksActions';

// export default [
//     TagsActions,
//     WorkActions
// ];

export default [
    { provide: TagsActions, useClass: TagsActions },
    { provide: WorkActions, useClass: WorkActions }
];
