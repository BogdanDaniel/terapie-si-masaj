import { isEmpty, isNumber, pickBy } from 'lodash';
import * as moment from 'moment';

export function getFormattedDate(date: Date | string) {
    return moment(date).format(dateFormat);
}

export const dateFormat = 'DD.MM.YYYY';


export function nonEmptyProperties(obj: { [key: string]: any }) {
    return pickBy(obj, val => isNumber(val) ? val : !isEmpty(val))
}