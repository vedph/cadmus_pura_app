import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PendingChangesGuard } from '@myrmidon/cadmus-core';
import {
  CadmusPuraPartUiModule,
  WORD_FORMS_PART_TYPEID,
  LEMMA_TAG_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-pura-part-ui';
import { TokenTextLayerPartFeatureComponent } from '@myrmidon/cadmus-part-general-pg';
import { DecoratedTokenTextComponent } from '@myrmidon/cadmus-ui';
import { CurrentItemBarComponent } from '@myrmidon/cadmus-ui-pg';

import { WordFormsPartFeatureComponent } from './word-forms-part-feature/word-forms-part-feature.component';
import { LemmaTagFragmentFeatureComponent } from './lemma-tag-fragment-feature/lemma-tag-fragment-feature.component';

export const RouterModuleForChild = RouterModule.forChild([
  {
    path: `${WORD_FORMS_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: WordFormsPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: 'it.vedph.token-text-layer/:pid',
    pathMatch: 'full',
    component: TokenTextLayerPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: `fragment/:pid/${LEMMA_TAG_FRAGMENT_TYPEID}/:loc`,
    pathMatch: 'full',
    component: LemmaTagFragmentFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
]);

@NgModule({
  declarations: [
    WordFormsPartFeatureComponent,
    LemmaTagFragmentFeatureComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    // Cadmus
    RouterModuleForChild,
    CurrentItemBarComponent,
    DecoratedTokenTextComponent,
    // PURA
    CadmusPuraPartUiModule,
  ],
  exports: [WordFormsPartFeatureComponent, LemmaTagFragmentFeatureComponent],
})
export class CadmusPuraPartPgModule {}
