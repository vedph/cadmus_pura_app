import { Injectable } from '@angular/core';
import { EditPartQueryBase } from '@myrmidon/cadmus-state';
import { EditWordFormsPartStore } from './edit-word-forms-part.store';

@Injectable({ providedIn: 'root' })
export class EditWordFormsPartQuery extends EditPartQueryBase {
  constructor(store: EditWordFormsPartStore) {
    super(store);
  }
}
