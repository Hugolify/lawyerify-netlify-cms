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
            },
            realestates_sellers: {
                label: "Types de vente",
                label_singular: "Type de vente",
                description: "Tous les types de vente"
            }
        },
        fields: {
            date_sale: "Date de vente",
            places_items: "Cabinets",
            place: "Cabinet",
            persons_expertises: "Expert en ?",
            persons_places: "Rattaché à un ou plusieurs cabinets ?",
            persons_statutes: "Satuts",
            price: {
                label: "Prix de mise en vente",
                sold: "Prix adjugé"
            },
            realestates_sellers: "Type de vente",
            visits: "Visites"
        }
    }
);