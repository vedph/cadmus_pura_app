import { Component, OnInit, Inject } from '@angular/core';

import {
  AuthJwtService,
  GravatarService,
  User,
} from '@myrmidon/auth-jwt-login';
import { Thesaurus, ThesaurusEntry } from '@myrmidon/cadmus-core';
import { AppService, AppQuery } from '@myrmidon/cadmus-state';
import { EnvService } from '@myrmidon/ng-tools';

@Component({
  selector: 'cadmus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
    private _gravatarService: GravatarService,
    private _appService: AppService,
    private _appQuery: AppQuery,
    env: EnvService
  ) {
    this.user = undefined;
    this.logged = false;
    this.itemBrowsers = [];
    this.version = env.get('version') || '';
  }

  ngOnInit(): void {
    this.user = this._authService.currentUserValue || undefined;
    this.logged = this.user !== null;

    this._authService.currentUser$.subscribe((user: User | null) => {
      this.logged = this._authService.isAuthenticated(true);
      this.user = user || undefined;
      // load the general app state just once
      if (user) {
        this._appService.load();
      }
    });

    this._appQuery
      .selectItemBrowserThesaurus()
      .subscribe((thesaurus: Thesaurus | undefined) => {
        this.itemBrowsers = thesaurus ? thesaurus.entries : null;
      });
  }

  public getItemBrowserRoute(id: string): string {
    return this._itemBrowserKeys[id] || id;
  }

  public getGravatarUrl(email?: string, size = 80): string {
    if (!email) {
      return '';
    }
    return this._gravatarService.buildGravatarUrl(email, size) || '';
  }

  public logout(): void {
    if (!this.logged) {
      return;
    }
    this._authService.logout();
  }
}
