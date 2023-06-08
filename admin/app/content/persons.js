import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { statutes } from '../fields/persons-statutes.js'
import { expertises } from '../fields/persons-expertises.js'
import { offices } from '../fields/persons-offices.js'
import { featured_image } from '../fields/featured-image.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'

const persons = {
    name: 'persons',
    label: 'Personnes',
    label_singular: 'Personne',
    folder: 'content/persons',
    create: true,
    description: 'Toutes les personnes',

    editor: { preview: false },
    // #i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    summary: '{{title}}',

    slug: '{{slug}}',

    fields: [
        isNotIndex,
        draft,
        title,
        statutes,
        expertises,
        offices,
        description,
        featured_image,
        contact,
        body
    ]
}

export default persons