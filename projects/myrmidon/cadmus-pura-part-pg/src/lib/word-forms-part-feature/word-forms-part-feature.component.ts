import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ThesauriSet } from '@myrmidon/cadmus-core';
import {
  EditItemQuery,
  EditItemService,
  EditPartFeatureBase,
} from '@myrmidon/cadmus-state';

import { EditWordFormsPartService } from './edit-word-forms-part.service';
import { EditWordFormsPartQuery } from './edit-word-forms-part.query';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'pura-word-forms-part-feature',
  templateUrl: './word-forms-part-feature.component.html',
  styleUrls: ['./word-forms-part-feature.component.css'],
})
export class WordFormsPartFeatureComponent
  extends EditPartFeatureBase
  implements OnInit {
  constructor(
    router: Router,
    route: ActivatedRoute,
    snackbar: MatSnackBar,
    editPartQuery: EditWordFormsPartQuery,
    editPartService: EditWordFormsPartService,
    editItemQuery: EditItemQuery,
    editItemService: EditItemService
  ) {
    super(
      router,
      route,
      snackbar,
      editPartQuery,
      editPartService,
      editItemQuery,
      editItemService
    );
  }

  public ngOnInit(): void {
    this.initEditor(['word-form-pos', 'word-form-variant-tags']);
  }
}
