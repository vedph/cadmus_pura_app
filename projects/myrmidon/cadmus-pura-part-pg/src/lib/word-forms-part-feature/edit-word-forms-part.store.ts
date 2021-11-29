import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
import { WORD_FORMS_PART_TYPEID } from '@myrmidon/cadmus-pura-part-ui';

import { EditPartState, EditPartStoreApi } from '@myrmidon/cadmus-state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: WORD_FORMS_PART_TYPEID })
export class EditWordFormsPartStore
  extends Store<EditPartState>
  implements EditPartStoreApi
{
  constructor() {
    super({});
  }

  public setDirty(value: boolean): void {
    this.update({ dirty: value });
  }
  public setSaving(value: boolean): void {
    this.update({ saving: value });
  }
}
