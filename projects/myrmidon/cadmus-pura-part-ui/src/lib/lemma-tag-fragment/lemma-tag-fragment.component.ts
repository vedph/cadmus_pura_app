import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';

import { ThesaurusEntry } from '@myrmidon/cadmus-core';
import { ModelEditorComponentBase } from '@myrmidon/cadmus-ui';
import { deepCopy } from '@myrmidon/ng-tools';

import { LemmaTagFragment } from '../lemma-tag-fragment';

/**
 * LemmaTag fragment editor component.
 * Thesauri: lemma-tags (optional).
 */
@Component({
  selector: 'pura-lemma-tag-fragment',
  templateUrl: './lemma-tag-fragment.component.html',
  styleUrls: ['./lemma-tag-fragment.component.css'],
})
export class LemmaTagFragmentComponent
  extends ModelEditorComponentBase<LemmaTagFragment>
  implements OnInit
{
  public value: FormControl<string | null>;
  public normValue: FormControl<string | null>;
  public tag: FormControl<string | null>;

  public lemTagEntries: ThesaurusEntry[] | undefined;

  constructor(authService: AuthJwtService, formBuilder: FormBuilder) {
    super(authService);
    // form
    this.value = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.normValue = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.tag = formBuilder.control(null, Validators.maxLength(50));

    this.form = formBuilder.group({
      value: this.value,
      normValue: this.normValue,
      tag: this.tag,
    });
  }

  public ngOnInit(): void {
    this.initEditor();
  }

  private updateForm(model: LemmaTagFragment): void {
    if (!model) {
      this.form!.reset();
      return;
    }

    this.value.setValue(model.value);
    this.normValue.setValue(model.normValue);
    this.tag.setValue(model.tag || null);
    this.form!.markAsPristine();
  }

  protected onModelSet(model: LemmaTagFragment): void {
    this.updateForm(deepCopy(model));
  }

  protected onThesauriSet(): void {
    const key = 'lemma-tags';
    if (this.thesauri && this.thesauri[key]) {
      this.lemTagEntries = this.thesauri[key].entries;
    } else {
      this.lemTagEntries = undefined;
    }
  }

  protected getModelFromForm(): LemmaTagFragment {
    return {
      location: this.model?.location ?? '',
      value: this.value.value?.trim() || '',
      normValue: this.normValue.value?.trim() || '',
      tag: this.tag.value?.trim(),
    };
  }
}
