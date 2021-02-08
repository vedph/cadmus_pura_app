import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { ModelEditorComponentBase, DialogService } from '@myrmidon/cadmus-ui';
import { AuthService } from '@myrmidon/cadmus-api';
import { ThesaurusEntry, deepCopy } from '@myrmidon/cadmus-core';
import {
  WordForm,
  WordFormsPart,
  WORD_FORMS_PART_TYPEID,
} from '../word-forms-part';
import { take } from 'rxjs/operators';

/**
 * WordFormsPart editor component.
 * Thesauri: word-form-pos, word-form-variant-tags (all optional).
 */
@Component({
  selector: 'pura-word-forms-part',
  templateUrl: './word-forms-part.component.html',
  styleUrls: ['./word-forms-part.component.css'],
})
export class WordFormsPartComponent
  extends ModelEditorComponentBase<WordFormsPart>
  implements OnInit {
  private _editedIndex: number;

  public tabIndex: number;
  public editedForm: WordForm | undefined;

  public posEntries: ThesaurusEntry[] | undefined;
  public varTagEntries: ThesaurusEntry[] | undefined;

  public forms: FormControl;

  constructor(
    authService: AuthService,
    formBuilder: FormBuilder,
    private _dialogService: DialogService
  ) {
    super(authService);
    this._editedIndex = -1;
    this.tabIndex = 0;
    // form
    this.forms = formBuilder.control([], Validators.required);
    this.form = formBuilder.group({
      entries: this.forms,
    });
  }

  public ngOnInit(): void {
    this.initEditor();
  }

  private updateForm(model: WordFormsPart): void {
    if (!model) {
      this.form.reset();
      return;
    }
    this.forms.setValue(model.forms || []);
    this.form.markAsPristine();
  }

  protected onModelSet(model: WordFormsPart): void {
    this.updateForm(deepCopy(model));
  }

  protected onThesauriSet(): void {
    let key = 'word-form-pos';
    if (this.thesauri && this.thesauri[key]) {
      this.posEntries = this.thesauri[key].entries;
    } else {
      this.posEntries = undefined;
    }

    key = 'word-form-variant-tags';
    if (this.thesauri && this.thesauri[key]) {
      this.varTagEntries = this.thesauri[key].entries;
    } else {
      this.varTagEntries = undefined;
    }
  }

  protected getModelFromForm(): WordFormsPart {
    let part = this.model;
    if (!part) {
      part = {
        itemId: this.itemId,
        id: '',
        typeId: WORD_FORMS_PART_TYPEID,
        roleId: this.roleId,
        timeCreated: new Date(),
        creatorId: '',
        timeModified: new Date(),
        userId: '',
        forms: [],
      };
    }
    part.forms = this.forms.value || [];
    return part;
  }

  public addForm(): void {
    const form: WordForm = {
      lemma: '',
      pos: ''
    };
    this.forms.setValue([...this.forms.value, form]);
    this.editForm(this.forms.value.length - 1);
  }

  public editForm(index: number): void {
    if (index < 0) {
      this._editedIndex = -1;
      this.tabIndex = 0;
      this.editedForm = undefined;
    } else {
      this._editedIndex = index;
      this.editedForm = this.forms.value[index];
      setTimeout(() => {
        this.tabIndex = 1;
      }, 300);
    }
  }

  public onFormSave(entry: WordForm): void {
    this.forms.setValue(
      this.forms.value.map((e: WordForm, i: number) =>
        i === this._editedIndex ? entry : e
      )
    );
    this.editForm(-1);
  }

  public onFormClose(): void {
    this.editForm(-1);
  }

  public deleteForm(index: number): void {
    this._dialogService
      .confirm('Confirmation', 'Delete form?')
      .pipe(take(1))
      .subscribe((yes) => {
        if (yes) {
          const forms = [...this.forms.value];
          forms.splice(index, 1);
          this.forms.setValue(forms);
        }
      });
  }

  public moveFormUp(index: number): void {
    if (index < 1) {
      return;
    }
    const form = this.forms.value[index];
    const forms = [...this.forms.value];
    forms.splice(index, 1);
    forms.splice(index - 1, 0, form);
    this.forms.setValue(forms);
  }

  public moveFormDown(index: number): void {
    if (index + 1 >= this.forms.value.length) {
      return;
    }
    const form = this.forms.value[index];
    const forms = [...this.forms.value];
    forms.splice(index, 1);
    forms.splice(index + 1, 0, form);
    this.forms.setValue(forms);
  }
}
