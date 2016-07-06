'use strcit';

import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

export default class SplitListPipe {
    static get annotations() {
        return [
            new Pipe({
                name: 'splitList'
            })
        ]
    }
    
    transform(iList, iPartQty, iSelectedPart) {
        if (!_.isArray(iList)) {
            throw new Error(`Expecting an argument of type array, got ${typeof iList}`)
        }

        const totalCount = iList.length;
        const partQty = (_.isNumber(iPartQty) && iPartQty > 0 && iPartQty < totalCount) ? iPartQty : 1;
        const partSize = totalCount/partQty;
        const selectedPart = (_.isNumber(iSelectedPart) && iSelectedPart > 0 && iSelectedPart <= partQty) ? iSelectedPart : 1;
        const upperLimit = partSize * selectedPart;
        const lowerLimit = upperLimit - partSize;
        const result = [];

        _.forEach(iList, (item, idx) => {
            if (lowerLimit <= idx && upperLimit > idx) {
                result.push(item);
            }
        });

        return result;
    }
}