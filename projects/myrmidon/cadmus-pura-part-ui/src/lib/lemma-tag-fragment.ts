import { Fragment } from '@myrmidon/cadmus-core';

/**
 * The lemma tag layer fragment server model.
 */
export interface LemmaTagFragment extends Fragment {
  value: string;
  normValue: string;
  tag?: string;
}

export const LEMMA_TAG_FRAGMENT_TYPEID = 'fr.it.vedph.pura.lemma-tag';

export const LEMMA_TAG_FRAGMENT_SCHEMA = {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id:
    'www.vedph.it/cadmus/fragments/pura/' + LEMMA_TAG_FRAGMENT_TYPEID + '.json',
  type: 'object',
  title: 'LemmaTagFragment',
  required: ['location', 'value', 'normValue'],
  properties: {
    location: {
      type: 'string',
    },
    baseText: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
    normValue: {
      type: 'string',
    },
    tag: {
      type: 'string',
    },
  },
};
