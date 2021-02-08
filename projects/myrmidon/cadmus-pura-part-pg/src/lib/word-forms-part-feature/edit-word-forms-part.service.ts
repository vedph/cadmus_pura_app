import { Injectable } from '@angular/core';
import { ItemService, ThesaurusService } from '@myrmidon/cadmus-api';
import { EditPartServiceBase } from '@myrmidon/cadmus-state';
import { EditWordFormsPartStore } from './edit-word-forms-part.store';

@Injectable({ providedIn: 'root' })
export class EditWordFormsPartService extends EditPartServiceBase {
  constructor(
    editPartStore: EditWordFormsPartStore,
    itemService: ItemService,
    thesaurusService: ThesaurusService
  ) {
    super(itemService, thesaurusService);
    this.store = editPartStore;
  }
}
