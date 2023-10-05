import { sold } from './sold.js'
import { price } from './price.js'
import { price_sold } from './price-sold.js'
import { visits } from './visits.js'
import { date_sale } from './date-sale.js';
import {t} from "../i18n/translater.js";

export const offer = {
    name: 'offer',
    label: t.fields.offer,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    fields: [
        sold,
        price,
        price_sold,
        visits,
        date_sale
    ]
}