import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';

import { ThesauriSet, ThesaurusEntry } from '@myrmidon/cadmus-core';
import { EditedObject, ModelEditorComponentBase } from '@myrmidon/cadmus-ui';

import { LemmaTagFragment } from '../lemma-tag-fragment';

/**
 * LemmaTag fragment editor component.
 * Thesauri: lemma-tags (optional).
 */
@Component({
  selector: 'pura-lemma-tag-fragment',
  templateUrl: './lemma-tag-fragment.component.html',
  styleUrls: ['./lemma-tag-fragment.component.css'],
  standalone: false,
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
    super(authService, formBuilder);
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
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(formBuilder: FormBuilder): FormGroup | UntypedFormGroup {
    return formBuilder.group({
      value: this.value,
      normValue: this.normValue,
      tag: this.tag,
    });
  }

  private updateThesauri(thesauri: ThesauriSet): void {
    const key = 'lemma-tags';
    if (this.hasThesaurus(key)) {
      this.lemTagEntries = thesauri[key].entries;
    } else {
      this.lemTagEntries = undefined;
    }
  }

  private updateForm(model: LemmaTagFragment | undefined | null): void {
    if (!model) {
      this.form.reset();
      return;
    }

    this.value.setValue(model.value);
    this.normValue.setValue(model.normValue);
    this.tag.setValue(model.tag || null);
    this.form.markAsPristine();
  }

  protected override onDataSet(data?: EditedObject<LemmaTagFragment>): void {
    // thesauri
    if (data?.thesauri) {
      this.updateThesauri(data.thesauri);
    }

    // form
    this.updateForm(data?.value);
  }

  protected getValue(): LemmaTagFragment {
    const fr = this.getEditedFragment() as LemmaTagFragment;
    fr.value = this.value.value?.trim() || '';
    fr.normValue = this.normValue.value?.trim() || '';
    fr.tag = this.tag.value?.trim();
    return fr;
  }
}
