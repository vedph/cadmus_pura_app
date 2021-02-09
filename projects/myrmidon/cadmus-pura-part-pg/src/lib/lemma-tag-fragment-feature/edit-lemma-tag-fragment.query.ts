import { Injectable } from '@angular/core';
import { EditFragmentQueryBase } from '@myrmidon/cadmus-state';
import { EditLemmaTagFragmentStore } from './edit-lemma-tag-fragment.store';

@Injectable({ providedIn: 'root' })
export class EditLemmaTagFragmentQuery extends EditFragmentQueryBase {
  constructor(protected store: EditLemmaTagFragmentStore) {
    super(store);
  }
}
