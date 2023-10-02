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
            selectedplaces: "Sélection de cabinets"
        },
        content: {
            places: {
                label: "Cabinets",
                label_singular: "Cabinet",
                description: "Tous les cabinets"
            }
        },
        fields: {
            places_items: "Cabinets",
            place: "Cabinet",
            persons_expertises: "Expert en ?",
            persons_places: "Rattaché à un ou plusieurs cabinets ?",
            persons_statutes: "Satuts"
        }
    }
);