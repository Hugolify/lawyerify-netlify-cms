import { overrideTranslations } from '../overrider.js';
import { blocks } from './blocks.js';
import { config } from './config.js';
import { content } from './content.js';
import { fields } from './fields.js';
import { shortcodes } from './shortcodes.js';

export const lawyerify = overrideTranslations(
    {
        blocks,
        config,
        content,
        fields,
        shortcodes
    },
    {
        blocks: {
            selectedplaces: "Selected offices"
        },
        content: {
            places: {
                label: "Offices",
                label_singular: "Office",
                description: "All offices"
            }
        },
        fields: {
            places_items: "Cabinets",
            place: "Office",
            persons_expertises: "Expert in?",
            persons_places: "Attached to one or more offices?",
            persons_statutes: "Status"
        }
    }
);