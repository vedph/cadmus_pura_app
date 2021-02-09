import { Injectable } from '@angular/core';
import { ItemService, ThesaurusService } from '@myrmidon/cadmus-api';
import { EditFragmentServiceBase } from '@myrmidon/cadmus-state';
import { EditLemmaTagFragmentStore } from './edit-lemma-tag-fragment.store';

@Injectable({ providedIn: 'root' })
export class EditLemmaTagFragmentService extends EditFragmentServiceBase {
  constructor(
    editPartStore: EditLemmaTagFragmentStore,
    itemService: ItemService,
    thesaurusService: ThesaurusService
  ) {
    super(itemService, thesaurusService);
    this.store = editPartStore;
  }
}
