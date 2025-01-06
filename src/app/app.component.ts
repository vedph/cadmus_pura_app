import { Component, OnInit, Inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EnvService, RamStorageService } from '@myrmidon/ngx-tools';
import { AuthJwtService, GravatarPipe, User } from '@myrmidon/auth-jwt-login';
import { ASSERTED_COMPOSITE_ID_CONFIGS_KEY } from '@myrmidon/cadmus-refs-asserted-ids';
import { RefLookupConfig } from '@myrmidon/cadmus-refs-lookup';
import { GeoNamesRefLookupService } from '@myrmidon/cadmus-refs-geonames-lookup';
import { ViafRefLookupService } from '@myrmidon/cadmus-refs-viaf-lookup';
import { DbpediaRefLookupService } from '@myrmidon/cadmus-refs-dbpedia-lookup';
import {
  GeoJsonFeature,
  WhgRefLookupService,
} from '@myrmidon/cadmus-refs-whg-lookup';

import { Thesaurus, ThesaurusEntry } from '@myrmidon/cadmus-core';
import { AppRepository } from '@myrmidon/cadmus-state';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    GravatarPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user?: User;
  public logged?: boolean;
  public itemBrowsers?: ThesaurusEntry[] | null;
  public version: string;

  constructor(
    @Inject('itemBrowserKeys')
    private _itemBrowserKeys: { [key: string]: string },
    private _authService: AuthJwtService,
    private _repository: AppRepository,
    env: EnvService,
    storage: RamStorageService,
    viaf: ViafRefLookupService,
    dbpedia: DbpediaRefLookupService,
    geonames: GeoNamesRefLookupService,
    whg: WhgRefLookupService
  ) {
    this.user = undefined;
    this.logged = false;
    this.itemBrowsers = [];
    this.version = env.get('version') || '';

    // configure external lookup for asserted composite IDs
    storage.store(ASSERTED_COMPOSITE_ID_CONFIGS_KEY, [
      {
        name: 'VIAF',
        iconUrl: '/img/viaf128.png',
        description: 'Virtual International Authority File',
        label: 'ID',
        service: viaf,
        itemIdGetter: (item: any) => item?.viafid,
        itemLabelGetter: (item: any) => item?.displayForm,
      },
      {
        name: 'DBpedia',
        iconUrl: '/img/dbpedia128.png',
        description: 'DBpedia',
        label: 'ID',
        service: dbpedia,
        itemIdGetter: (item: any) => item?.uri,
        itemLabelGetter: (item: any) => item?.label,
      },
      {
        name: 'geonames',
        iconUrl: '/img/geonames128.png',
        description: 'GeoNames',
        label: 'ID',
        service: geonames,
        itemIdGetter: (item: any) => item?.geonameId,
        itemLabelGetter: (item: any) => item?.toponymName,
      },
      {
        name: 'whg',
        iconUrl: '/img/whg128.png',
        description: 'World Historical Gazetteer',
        label: 'ID',
        service: whg,
        itemIdGetter: (item: GeoJsonFeature) => item?.properties.place_id,
        itemLabelGetter: (item: GeoJsonFeature) => item?.properties.title,
      },
    ] as RefLookupConfig[]);
  }

  ngOnInit(): void {
    this.user = this._authService.currentUserValue || undefined;
    this.logged = this.user !== null;

    this._authService.currentUser$.subscribe((user: User | null) => {
      this.logged = this._authService.isAuthenticated(true);
      this.user = user || undefined;
      // load the general app state just once
      if (user) {
        this._repository.load();
      }
    });

    this._repository.itemBrowserThesaurus$.subscribe(
      (thesaurus: Thesaurus | undefined) => {
        this.itemBrowsers = thesaurus ? thesaurus.entries : null;
      }
    );
  }

  public getItemBrowserRoute(id: string): string {
    return this._itemBrowserKeys[id] || id;
  }

  public logout(): void {
    if (!this.logged) {
      return;
    }
    this._authService.logout();
  }
}
