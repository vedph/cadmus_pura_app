import { Part } from '@myrmidon/cadmus-core';

/**
 * A variant in a WordForm.
 */
export interface VariantForm {
  value: string;
  pos: string;
  tag?: string;
}

/**
 * A word form in a WordFormsPart.
 */
export interface WordForm {
  lid?: string;
  prelemma?: string;
  lemma: string;
  postlemma?: string;
  homograph?: number;
  pos: string;
  note?: string;
  variants?: VariantForm[];
}

/**
 * The word forms part model.
 */
export interface WordFormsPart extends Part {
  forms: WordForm[];
}

/**
 * The type ID used to identify the WordFormsPart type.
 */
export const WORD_FORMS_PART_TYPEID = 'it.vedph.pura.word-forms';

/**
 * JSON schema for the WordForms part. This is used in the editor demo.
 * You can use the JSON schema tool at https://jsonschema.net/.
 */
export const WORD_FORMS_PART_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'www.vedph.it/cadmus/parts/pura/' + WORD_FORMS_PART_TYPEID + '.json',
  type: 'object',
  title: 'WordFormsPart',
  required: [
    'id',
    'itemId',
    'typeId',
    'timeCreated',
    'creatorId',
    'timeModified',
    'userId',
    'forms',
  ],
  properties: {
    timeCreated: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d+Z$',
    },
    creatorId: {
      type: 'string',
    },
    timeModified: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d+Z$',
    },
    userId: {
      type: 'string',
    },
    id: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    },
    itemId: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    },
    typeId: {
      type: 'string',
      pattern: '^[a-z][-0-9a-z._]*$',
    },
    roleId: {
      type: ['string', 'null'],
      pattern: '^([a-z][-0-9a-z._]*)?$',
    },
    forms: {
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'object',
            required: ['lemma', 'pos'],
            properties: {
              lid: {
                type: 'string',
              },
              prelemma: {
                type: 'string',
              },
              lemma: {
                type: 'string',
              },
              postlemma: {
                type: 'string',
              },
              homograph: {
                type: 'integer',
              },
              pos: {
                type: 'string',
              },
              note: {
                type: 'string',
              },
              variants: {
                type: 'array',
                items: {
                  anyOf: [
                    {
                      type: 'object',
                      required: ['value','pos'],
                      properties: {
                        value: {
                          type: 'string',
                        },
                        pos: {
                          type: 'string',
                        },
                        tag: {
                          type: 'string',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  },
};
