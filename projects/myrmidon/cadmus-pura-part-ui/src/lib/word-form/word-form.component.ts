import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThesaurusEntry } from '@myrmidon/cadmus-core';
import { VariantForm, WordForm } from '../word-forms-part';

@Component({
  selector: 'pura-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
})
export class WordFormComponent implements OnInit {
  private _model: WordForm | undefined;

  @Input()
  public get model(): WordForm | undefined {
    return this._model;
  }
  public set model(value: WordForm | undefined) {
    this._model = value;
    this.updateForm(value);
  }

  @Input()
  public posEntries: ThesaurusEntry[] | undefined;
  @Input()
  public varTagEntries: ThesaurusEntry[] | undefined;

  @Output()
  public modelChange: EventEmitter<WordForm>;
  @Output()
  public editorClose: EventEmitter<any>;

  public lid: FormControl;
  public prelemma: FormControl;
  public lemma: FormControl;
  public postlemma: FormControl;
  public homograph: FormControl;
  public pos: FormControl;
  public note: FormControl;
  public variants: FormArray;
  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.modelChange = new EventEmitter<WordForm>();
    this.editorClose = new EventEmitter<any>();
    // form
    this.lid = _formBuilder.control(null, Validators.maxLength(100));
    this.prelemma = _formBuilder.control(null, Validators.maxLength(50));
    this.lemma = _formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.postlemma = _formBuilder.control(null, Validators.maxLength(50));
    this.homograph = _formBuilder.control(0);
    this.pos = _formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.note = _formBuilder.control(null, Validators.maxLength(500));
    this.variants = _formBuilder.array([]);
    this.form = _formBuilder.group({
      lid: this.lid,
      prelemma: this.prelemma,
      lemma: this.lemma,
      postlemma: this.postlemma,
      homograph: this.homograph,
      pos: this.pos,
      note: this.note,
      variants: this.variants,
    });
  }

  ngOnInit(): void {
    this.updateForm(this.model);
  }

  private updateForm(model: WordForm | undefined): void {
    if (!model) {
      this.form.reset();
      return;
    }

    this.lid.setValue(model.lid);
    this.prelemma.setValue(model.prelemma);
    this.lemma.setValue(model.lemma);
    this.postlemma.setValue(model.postlemma);
    this.homograph.setValue(model.homograph);
    this.pos.setValue(model.pos);
    this.note.setValue(model.note);
    // variants
    this.variants.clear();
    if (model.variants?.length) {
      for (let v of model.variants) {
        this.variants.controls.push(this.getVariantGroup(v));
      }
    }

    this.form.markAsPristine();
  }

  private getModel(): WordForm | null {
    return {
      lid: this.lid.value?.trim(),
      prelemma: this.prelemma.value?.trim(),
      lemma: this.lemma.value?.trim(),
      postlemma: this.postlemma.value?.trim(),
      homograph: this.homograph.value,
      pos: this.pos.value?.trim(),
      note: this.note.value?.trim(),
      variants: this.getVariants(),
    };
  }

  //#region Variants
  private getVariantGroup(form?: VariantForm): FormGroup {
    return this._formBuilder.group({
      value: this._formBuilder.control(form?.value, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      pos: this._formBuilder.control(form?.pos, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      tag: this._formBuilder.control(form?.tag, Validators.maxLength(50)),
    });
  }

  public addVariant(item?: VariantForm): void {
    this.variants.push(this.getVariantGroup(item));
    this.variants.markAsDirty();
  }

  public removeVariant(index: number): void {
    this.variants.removeAt(index);
    this.variants.markAsDirty();
  }

  public moveVariantUp(index: number): void {
    if (index < 1) {
      return;
    }
    const item = this.variants.controls[index];
    this.variants.removeAt(index);
    this.variants.insert(index - 1, item);
    this.variants.markAsDirty();
  }

  public moveVariantDown(index: number): void {
    if (index + 1 >= this.variants.length) {
      return;
    }
    const item = this.variants.controls[index];
    this.variants.removeAt(index);
    this.variants.insert(index + 1, item);
    this.variants.markAsDirty();
  }

  private getVariants(): VariantForm[] | undefined {
    const entries: VariantForm[] = [];
    for (let i = 0; i < this.variants.length; i++) {
      const g = this.variants.at(i) as FormGroup;
      entries.push({
        value: g.controls.value.value?.trim(),
        pos: g.controls.pos.value?.trim(),
        tag: g.controls.tag.value?.trim(),
      });
    }
    return entries.length ? entries : undefined;
  }
  //#endregion

  public cancel(): void {
    this.editorClose.emit();
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }
    const model = this.getModel();
    if (!model) {
      return;
    }
    this.modelChange.emit(model);
  }
}
