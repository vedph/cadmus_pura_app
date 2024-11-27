import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  EditFragmentFeatureBase,
  FragmentEditorService,
} from '@myrmidon/cadmus-state';
import { LibraryRouteService } from '@myrmidon/cadmus-core';

@Component({
  selector: 'pura-lemma-tag-fragment-feature',
  templateUrl: './lemma-tag-fragment-feature.component.html',
  styleUrls: ['./lemma-tag-fragment-feature.component.css'],
  standalone: false,
})
export class LemmaTagFragmentFeatureComponent
  extends EditFragmentFeatureBase
  implements OnInit
{
  constructor(
    router: Router,
    route: ActivatedRoute,
    snackbar: MatSnackBar,
    editorService: FragmentEditorService,
    libraryRouteService: LibraryRouteService
  ) {
    super(router, route, snackbar, editorService, libraryRouteService);
  }

  protected override getReqThesauriIds(): string[] {
    return ['lemma-tags'];
  }
}
