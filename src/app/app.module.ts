import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// material
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
// ngx monaco
import { MonacoEditorModule } from 'ngx-monaco-editor';
// ngx markdown
import { MarkdownModule } from 'ngx-markdown';

// myrmidon
import { NgxDirtyCheckModule } from '@myrmidon/ngx-dirty-check';
import { EnvServiceProvider, NgToolsModule } from '@myrmidon/ng-tools';
import { NgMatToolsModule } from '@myrmidon/ng-mat-tools';
import {
  AuthJwtInterceptor,
  AuthJwtLoginModule,
} from '@myrmidon/auth-jwt-login';
import { AuthJwtAdminModule } from '@myrmidon/auth-jwt-admin';

// cadmus bricks
import { CadmusRefsDocReferencesModule } from '@myrmidon/cadmus-refs-doc-references';
import { CadmusRefsHistoricalDateModule } from '@myrmidon/cadmus-refs-historical-date';
import { CadmusRefsExternalIdsModule } from '@myrmidon/cadmus-refs-external-ids';
import { CadmusRefsLookupModule } from '@myrmidon/cadmus-refs-lookup';

// cadmus libs
import { CadmusCoreModule } from '@myrmidon/cadmus-core';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusTextBlockViewModule } from '@myrmidon/cadmus-text-block-view';
import { CadmusPreviewUiModule } from '@myrmidon/cadmus-preview-ui';
import { CadmusPreviewPgModule } from '@myrmidon/cadmus-preview-pg';

import { HomeComponent } from './home/home.component';
import { PART_EDITOR_KEYS } from './part-editor-keys';
import { ITEM_BROWSER_KEYS } from './item-browser-keys';
import { INDEX_LOOKUP_DEFINITIONS } from './index-lookup-definitions';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterUserPageComponent } from './register-user-page/register-user-page.component';
import { ManageUsersPageComponent } from './manage-users-page/manage-users-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CadmusUiFlagsPickerModule } from '@myrmidon/cadmus-ui-flags-picker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    ManageUsersPageComponent,
    RegisterUserPageComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // material
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTreeModule,
    // Monaco
    MonacoEditorModule.forRoot(),
    // markdown
    MarkdownModule.forRoot(),
    // myrmidon
    NgToolsModule,
    NgMatToolsModule,
    AuthJwtLoginModule,
    AuthJwtAdminModule,
    NgxDirtyCheckModule,
    // cadmus bricks
    CadmusRefsDocReferencesModule,
    CadmusRefsHistoricalDateModule,
    CadmusRefsExternalIdsModule,
    CadmusRefsLookupModule,
    CadmusUiFlagsPickerModule,
    // Cadmus
    CadmusCoreModule,
    CadmusUiModule,
    CadmusTextBlockViewModule,
    CadmusPreviewUiModule,
    CadmusPreviewPgModule,
    NgToolsModule,
    NgMatToolsModule,
  ],
  providers: [
    EnvServiceProvider,
    // parts and fragments type IDs to editor group keys mappings
    // https://github.com/nrwl/nx/issues/208#issuecomment-384102058
    // inject like: @Inject('partEditorKeys') partEditorKeys: PartEditorKeys
    {
      provide: 'partEditorKeys',
      useValue: PART_EDITOR_KEYS,
    },
    // index lookup definitions
    {
      provide: 'indexLookupDefinitions',
      useValue: INDEX_LOOKUP_DEFINITIONS,
    },
    // item browsers IDs to editor keys mappings
    // inject like: @Inject('itemBrowserKeys') itemBrowserKeys: { [key: string]: string }
    {
      provide: 'itemBrowserKeys',
      useValue: ITEM_BROWSER_KEYS,
    },
    // HTTP interceptor
    // https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthJwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
