import {t} from "../i18n/translater.js";

export const visits = {
    name: 'visits',
    label: t.fields.visits,
    widget: 'list',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        { name: 'from', label: t.fields.date.from, widget: 'datetime', time_format: true, required: true },
        { name: 'to', label: t.fields.date.to, widget: 'datetime', required: true }
    ]
}