import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgToolsModule } from '@myrmidon/ng-tools';
import { CadmusMaterialModule } from '@myrmidon/cadmus-material';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { NgMatToolsModule } from '@myrmidon/ng-mat-tools';

import { WordFormsPartComponent } from './word-forms-part/word-forms-part.component';
import { WordFormComponent } from './word-form/word-form.component';
import { LemmaTagFragmentComponent } from './lemma-tag-fragment/lemma-tag-fragment.component';

@NgModule({
  declarations: [
    LemmaTagFragmentComponent,
    WordFormComponent,
    WordFormsPartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Cadmus
    CadmusMaterialModule,
    CadmusUiModule,
    NgToolsModule,
    NgMatToolsModule
  ],
  exports: [
    LemmaTagFragmentComponent,
    WordFormComponent,
    WordFormsPartComponent,
  ],
})
export class CadmusPuraPartUiModule {}
