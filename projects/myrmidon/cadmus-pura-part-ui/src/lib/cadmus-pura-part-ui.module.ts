import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// general Cadmus modules
import { CadmusMaterialModule } from "@myrmidon/cadmus-material";
import { CadmusUiModule } from "@myrmidon/cadmus-ui";
import { WordFormsPartComponent } from './word-forms-part/word-forms-part.component';
import { WordFormComponent } from './word-form/word-form.component';

@NgModule({
  declarations: [WordFormsPartComponent, WordFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Cadmus
    CadmusMaterialModule,
    CadmusUiModule,
  ],
  exports: [WordFormsPartComponent, WordFormComponent],
})
export class CadmusPuraPartUiModule {}
