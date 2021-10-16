import { PartEditorKeys } from '@myrmidon/cadmus-core';

// general
import {
  BIBLIOGRAPHY_PART_TYPEID,
  CATEGORIES_PART_TYPEID,
  HISTORICAL_DATE_PART_TYPEID,
  INDEX_KEYWORDS_PART_TYPEID,
  NOTE_PART_TYPEID,
  TOKEN_TEXT_PART_TYPEID,
  COMMENT_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-part-general-ui';

// philology
import {
  APPARATUS_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-part-philology-ui';

// tgr-gr
import {
  LING_TAGS_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-tgr-part-gr-ui';

// tgr-ms
import {
  MSCONTENTS_PART_TYPEID,
  MSHISTORY_PART_TYPEID,
  MSORNAMENTS_PART_TYPEID,
  MSPLACES_PART_TYPEID,
  MSSCRIPTS_PART_TYPEID,
  MSUNITS_PART_TYPEID,
  MSSIGNATURES_PART_TYPEID
} from '@myrmidon/cadmus-tgr-part-ms-ui';

// pura
import {
  WORD_FORMS_PART_TYPEID,
  LEMMA_TAG_FRAGMENT_TYPEID
} from '@myrmidon/cadmus-pura-part-ui'

const GENERAL = 'general';
const PHILOLOGY = 'philology';
const TGR_GR = 'tgr-gr';
const TGR_MS = 'tgr-ms';
const PURA = 'pura';

const TOKEN_TEXT_LAYER_PART_TYPEID = 'it.vedph.token-text-layer';

/**
 * The parts and fragments editor keys for this UI.
 * Each property is a part type ID, mapped to a value of type PartGroupKey,
 * having a part property with the part's editor key, and a fragments property
 * with the mappings between fragment type IDs and their editor keys.
 */
export const PART_EDITOR_KEYS: PartEditorKeys = {
  // general
  [BIBLIOGRAPHY_PART_TYPEID]: {
    part: GENERAL,
  },
  [CATEGORIES_PART_TYPEID]: {
    part: GENERAL,
  },
  [HISTORICAL_DATE_PART_TYPEID]: {
    part: GENERAL,
  },
  [INDEX_KEYWORDS_PART_TYPEID]: {
    part: GENERAL,
  },
  [NOTE_PART_TYPEID]: {
    part: GENERAL,
  },
  [TOKEN_TEXT_PART_TYPEID]: {
    part: GENERAL,
  },
  // tgr-gr
  [LING_TAGS_FRAGMENT_TYPEID]: {
    part: TGR_GR
  },
  // tgr-ms
  [MSSIGNATURES_PART_TYPEID]: {
    part: TGR_MS,
  },
  [MSCONTENTS_PART_TYPEID]: {
    part: TGR_MS,
  },
  [MSHISTORY_PART_TYPEID]: {
    part: TGR_MS,
  },
  [MSORNAMENTS_PART_TYPEID]: {
    part: TGR_MS,
  },
  [MSPLACES_PART_TYPEID]: {
    part: TGR_MS,
  },
  [MSSCRIPTS_PART_TYPEID]: {
    part: TGR_MS,
  },
  [MSUNITS_PART_TYPEID]: {
    part: TGR_MS,
  },
  // pura
  [WORD_FORMS_PART_TYPEID]: {
    part: PURA
  },
  // layer parts
  [TOKEN_TEXT_LAYER_PART_TYPEID]: {
    part: GENERAL,
    fragments: {
      [COMMENT_FRAGMENT_TYPEID]: GENERAL,
      [APPARATUS_FRAGMENT_TYPEID]: PHILOLOGY,
      [LING_TAGS_FRAGMENT_TYPEID]: TGR_GR,
      [LEMMA_TAG_FRAGMENT_TYPEID]: PURA
    },
  },
};
