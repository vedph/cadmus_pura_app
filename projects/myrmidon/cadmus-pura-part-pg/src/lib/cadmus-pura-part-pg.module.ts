import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadmusCoreModule, PendingChangesGuard } from '@myrmidon/cadmus-core';
import { CadmusMaterialModule } from '@myrmidon/cadmus-material';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';
import {
  CadmusPuraPartUiModule,
  WORD_FORMS_PART_TYPEID,
} from '@myrmidon/cadmus-pura-part-ui';
import { WordFormsPartFeatureComponent } from './word-forms-part-feature/word-forms-part-feature.component';

export const RouterModuleForChild = RouterModule.forChild([
  {
    path: `${WORD_FORMS_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: WordFormsPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  // {
  //   path: `fragment/:pid/${INTERPOLATIONS_FRAGMENT_TYPEID}/:loc`,
  //   pathMatch: 'full',
  //   component: InterpolationsFragmentFeatureComponent,
  //   canDeactivate: [PendingChangesGuard],
  // },
]);

@NgModule({
  declarations: [WordFormsPartFeatureComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Cadmus
    RouterModuleForChild,
    CadmusCoreModule,
    CadmusMaterialModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
    // PURA
    CadmusPuraPartUiModule,
  ],
  exports: [
    WordFormsPartFeatureComponent
  ],
})
export class CadmusPuraPartPgModule {}
