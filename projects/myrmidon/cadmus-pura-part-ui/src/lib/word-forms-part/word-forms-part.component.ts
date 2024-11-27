import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
  UntypedFormGroup,
} from '@angular/forms';
import { take } from 'rxjs/operators';

import { EditedObject, ModelEditorComponentBase } from '@myrmidon/cadmus-ui';
import { ThesauriSet, ThesaurusEntry } from '@myrmidon/cadmus-core';
import { DialogService } from '@myrmidon/ng-mat-tools';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';

import {
  WordForm,
  WordFormsPart,
  WORD_FORMS_PART_TYPEID,
} from '../word-forms-part';

/**
 * WordFormsPart editor component.
 * Thesauri: word-form-pos, word-form-variant-tags (all optional).
 */
@Component({
  selector: 'pura-word-forms-part',
  templateUrl: './word-forms-part.component.html',
  styleUrls: ['./word-forms-part.component.css'],
  standalone: false,
})
export class WordFormsPartComponent
  extends ModelEditorComponentBase<WordFormsPart>
  implements OnInit
{
  private _editedIndex: number;

  public tabIndex: number;
  public editedForm: WordForm | undefined;

  public posEntries: ThesaurusEntry[] | undefined;
  public varTagEntries: ThesaurusEntry[] | undefined;

  public forms: FormControl<WordForm[]>;

  constructor(
    authService: AuthJwtService,
    formBuilder: FormBuilder,
    private _dialogService: DialogService
  ) {
    super(authService, formBuilder);
    this._editedIndex = -1;
    this.tabIndex = 0;
    // form
    this.forms = formBuilder.control([], {
      validators: Validators.required,
      nonNullable: true,
    });
  }

  protected buildForm(formBuilder: FormBuilder): FormGroup | UntypedFormGroup {
    return formBuilder.group({
      entries: this.forms,
    });
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  private updateThesauri(thesauri: ThesauriSet): void {
    let key = 'word-form-pos';
    if (this.hasThesaurus(key)) {
      this.posEntries = thesauri[key].entries;
    } else {
      this.posEntries = undefined;
    }

    key = 'word-form-variant-tags';
    if (this.hasThesaurus(key)) {
      this.varTagEntries = thesauri[key].entries;
    } else {
      this.varTagEntries = undefined;
    }
  }

  private updateForm(model: WordFormsPart | undefined | null): void {
    if (!model) {
      this.form!.reset();
      return;
    }
    this.forms.setValue(model.forms || []);
    this.form.markAsPristine();
  }

  protected override onDataSet(data?: EditedObject<WordFormsPart>): void {
    // thesauri
    if (data?.thesauri) {
      this.updateThesauri(data.thesauri);
    }

    // form
    this.updateForm(data?.value);
  }

  protected getValue(): WordFormsPart {
    let part = this.getEditedPart(WORD_FORMS_PART_TYPEID) as WordFormsPart;
    part.forms = this.forms.value || [];
    return part!;
  }

  public addForm(): void {
    const form: WordForm = {
      lemma: '',
      pos: '',
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

  public formToString(form?: WordForm): string {
    if (!form) {
      return '';
    }
    const sb: string[] = [];
    if (form.prelemma) {
      sb.push(form.prelemma);
      sb.push(' ');
    }
    sb.push(form.lemma);
    if (form.postlemma) {
      sb.push(' ');
      sb.push(form.postlemma);
    }
    if (form.homograph) {
      sb.push(' (');
      sb.push(form.homograph.toString());
      sb.push(')');
    }

    return sb.join('');
  }
}
